// @flow
import HegelError from "../utils/errors";
import { Type } from "../type-graph/types/type";
import { Scope } from "../type-graph/scope";
import { TypeVar } from "../type-graph/types/type-var";
import { CallMeta } from "../type-graph/meta/call-meta";
import { TupleType } from "../type-graph/types/tuple-type";
import { UnionType } from "../type-graph/types/union-type";
import { $BottomType } from "../type-graph/types/bottom-type";
import { GenericType } from "../type-graph/types/generic-type";
import { ModuleScope } from "../type-graph/module-scope";
import { VariableInfo } from "../type-graph/variable-info";
import { getNameForType } from "../utils/type-utils";
import { FunctionType, RestArgument } from "../type-graph/types/function-type";
import {
  implicitApplyGeneric,
  isGenericFunctionType
} from "../inference/function-type";
import type { CallableType } from "../type-graph/meta/call-meta";
import type { SourceLocation } from "@babel/parser";

function getCallTargetType(target: CallableType, args): FunctionType {
  // $FlowIssue
  const targetType = target instanceof VariableInfo ? target.type : target;
  return targetType instanceof GenericType
    ? implicitApplyGeneric(targetType, args)
    : (targetType: any);
}

function getActualType(
  actual: ?Type | VariableInfo | Array<Type | VariableInfo>,
  typeScope: Scope
) {
  if (actual === undefined || actual === null) {
    return Type.createTypeWithName("undefined", typeScope);
  }
  if (Array.isArray(actual)) {
    const items = actual.map(a => getActualType(a, typeScope));
    return new TupleType(TupleType.getName(items), items);
  }
  if (actual instanceof VariableInfo) {
    return getActualType(actual.type, typeScope);
  }
  if (actual instanceof TypeVar && actual.root != undefined) {
    return actual.root;
  }
  if (actual instanceof $BottomType) {
    return actual.subordinateMagicType;
  }
  return actual;
}

function isValidTypes(
  targetName: mixed,
  declaratedType: Type | RestArgument,
  actual: ?Type | VariableInfo | Array<VariableInfo | Type>,
  typeScope: Scope
): boolean {
  let declaratedRootType =
    declaratedType instanceof RestArgument
      ? declaratedType.type
      : declaratedType;
  const actualRootType = getActualType(actual, typeScope);
  if (declaratedType instanceof RestArgument && Array.isArray(actual)) {
    return isValidTypes(
      targetName,
      declaratedType.type,
      actualRootType,
      typeScope
    );
  } else if (!(declaratedType instanceof RestArgument)) {
    declaratedRootType =
      declaratedRootType instanceof TypeVar && declaratedRootType.root
        ? declaratedRootType.root
        : declaratedRootType;
    if (actualRootType instanceof UnionType) {
      return actualRootType.variants.every(t =>
        isValidTypes(targetName, declaratedRootType, t, typeScope)
      );
    }
    if ("onlyLiteral" in declaratedRootType && actual instanceof VariableInfo) {
      return declaratedRootType.equalsTo(actualRootType);
    }
    if (
      targetName === "" &&
      (declaratedRootType instanceof FunctionType ||
        isGenericFunctionType(declaratedRootType)) &&
      (actualRootType instanceof FunctionType ||
        isGenericFunctionType(actualRootType))
    ) {
      return actualRootType.isPrincipalTypeFor(declaratedRootType);
    }
    if (targetName === "return" && declaratedRootType instanceof TypeVar) {
      return declaratedRootType.equalsTo(actualRootType);
    }
    return declaratedRootType.isPrincipalTypeFor(actualRootType);
  }
  throw new Error("Never!");
}

function checkSingleCall(call: CallMeta, typeScope: Scope): void {
  const givenArgumentsTypes = call.arguments.map(
    t => (t instanceof VariableInfo ? t.type : t)
  );
  const targetFunctionType = getCallTargetType(
    // $FlowIssue
    call.target.type || call.target,
    givenArgumentsTypes
  );
  const targetArguments = targetFunctionType.argumentsTypes;
  const requiredTargetArguments = targetArguments.filter(
    a =>
      !(
        (a instanceof UnionType &&
          a.variants.find(a =>
            a.equalsTo(Type.createTypeWithName("undefined", typeScope))
          )) ||
        a instanceof RestArgument
      )
  );
  if (
    requiredTargetArguments.length > givenArgumentsTypes.length &&
    !(targetArguments[0] instanceof RestArgument)
  ) {
    throw new HegelError(
      `${requiredTargetArguments.length} arguments are required. Given ${
        givenArgumentsTypes.length
      }.`,
      call.loc
    );
  }
  for (let i = 0; i < targetArguments.length; i++) {
    const arg1 = targetArguments[i];
    const arg2 =
      arg1 instanceof RestArgument
        ? call.arguments.slice(i)
        : call.arguments[i];
    if (!isValidTypes(call.targetName, arg1, arg2, typeScope)) {
      let actualType =
        arg1 instanceof RestArgument
          ? givenArgumentsTypes.slice(i)
          : givenArgumentsTypes[i];
      actualType =
        actualType instanceof VariableInfo ? actualType.type : actualType;
      const actualTypeName =
        // $FlowIssue
        arg2 === undefined ? "undefined" : TupleType.getName(actualType);
      throw new HegelError(
        `Type "${actualTypeName}" is incompatible with type "${getNameForType(
          arg1
        )}"`,
        call.loc
      );
    }
  }
}

function checkCalls(
  path: string,
  scope: Scope | ModuleScope,
  typeScope: Scope,
  errors: Array<HegelError>
): void {
  let returnWasCalled = false;
  for (let i = 0; i < scope.calls.length; i++) {
    if (scope.calls[i].targetName === "return") {
      returnWasCalled = true;
    }
    try {
      checkSingleCall(scope.calls[i], typeScope);
    } catch (e) {
      e.source = path;
      errors.push(e);
    }
  }
  if (
    scope instanceof Scope &&
    scope.type === Scope.FUNCTION_TYPE &&
    scope.declaration instanceof VariableInfo &&
    !returnWasCalled
  ) {
    const { declaration } = scope;
    const functionDeclaration: any =
      declaration.type instanceof GenericType
        ? declaration.type.subordinateType
        : declaration.type;
    if (functionDeclaration.returnType === undefined) {
      return;
    }
    try {
      if (
        !functionDeclaration.returnType.isPrincipalTypeFor(
          new Type("undefined", { isSubtypeOf: new Type("void") })
        )
      ) {
        throw new HegelError(
          `Function should return something with type "${getNameForType(
            functionDeclaration.returnType
          )}"`,
          declaration.meta.loc,
          path
        );
      }
    } catch (e) {
      errors.push(e);
    }
  }
}

export default checkCalls;
