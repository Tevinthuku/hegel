import HegelError from "../../utils/errors";
import { Type } from "./type";
import { TypeVar } from "./type-var";
import { TupleType } from "./tuple-type";
import { TypeScope } from "../type-scope";
import { UnionType } from "./union-type";
import { ObjectType } from "./object-type";
import { GenericType } from "./generic-type";
import { CollectionType } from "./collection-type";
import { CALLABLE, CONSTRUCTABLE, INDEXABLE } from "../constants";

export class $Keys extends GenericType {
  static get name() {
    return "$Keys";
  }

  constructor(_, meta = {}) {
    const parent = new TypeScope(meta.parent);
    super("$Keys", meta, [TypeVar.term("target", { parent })], parent, null);
  }

  isPrincipalTypeFor() {
    return false;
  }

  equalsTo() {
    return false;
  }

  isSuperTypeFor() {
    return false;
  }

  applyGeneric(
    parameters,
    loc,
    shouldBeMemoize = true,
    isCalledAsBottom = false
  ) {
    super.assertParameters(parameters, loc);
    const [currentTarget] = parameters;
    const realTarget = this.getOponentType(currentTarget);
    if (realTarget instanceof TypeVar) {
      return this.bottomizeWith(parameters, currentTarget.parent, loc);
    }
    if (
      !(realTarget instanceof ObjectType) &&
      !(realTarget instanceof TupleType) &&
      !(realTarget instanceof CollectionType)
    ) {
      throw new HegelError(
        "First parameter should be an object or collection type",
        loc
      );
    }
    if (realTarget instanceof TupleType) {
      return realTarget.isSubtypeOf.keyType;
    }
    if (realTarget instanceof CollectionType) {
      return realTarget.keyType;
    }
    const variants = [];
    for (const property of realTarget.properties.keys()) {
      if (
        property !== CALLABLE &&
        property !== CONSTRUCTABLE &&
        property !== INDEXABLE
      ) {
        variants.push(Type.term(`'${property}'`, { isSubtypeOf: Type.String }));
      }
    }
    if (!realTarget.isStrict) {
      variants.push(Type.Unknown);
    }
    return UnionType.term(null, {}, variants);
  }
}
