(this.webpackJsonp=this.webpackJsonp||[]).push([[25],{1315:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n(19),n(5),n(3),n(1),n(13),n(14),n(22);var a=n(59),o=n(66);n(36);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/what-and-why.mdx"}});var s={_frontmatter:r},l=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"introduction"},"Introduction"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"what-is-hegel"},"What is Hegel?"),Object(a.b)("p",null,"Hegel is a static type checker for JavaScript. It means that it is not a new one language which compiles to JavaScript. No. it's only a tool which analyzes your code ahead of time and show you results of the analysis. Also it means that you don't need to learn a new language to use static strong type system - JavaScript is enough. But, additionaly, this tool provide an type syntax for your variable and function arguments, analysis of your types (even if you don't use type syntax), which give you an ability to find bugs faster without actually running your program."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// Example from real life 😭\nclass DataBase {\n  reconnect() { /* ... reconnect logic */}\n  dropDatabase() {}\n}\nclass Fixture {\n  reconnect() { this.dropDatabase(); /* ... reconnect logic */}\n  dropDatabase() {}\n}\n\nfunction setupE2E(db) {\n  db.reconnect();\n}\n\n// And your teamate forgot to change something after debugging\nconst db = new Fixture();\ndebugger;\nsetupE2E(db);\n// Congratulations, you became an DropDatabase Engineer \n")),Object(a.b)("p",null,"But if you would added only one thing in your code with Hegel, you would not droped an DataBase."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"// ...\nfunction setupE2E(db: DataBase) {\n// ...\n")),Object(a.b)("p",null,"You can see result in ",Object(a.b)("a",i({parentName:"p"},{href:"/hegel/try#MYGwhgzhAEAiYBcwCFIFNoG8BQ1oCc1gB7AO1KIQAoBKLAtBAV31OgQAsBLCAbgHoAVNAB0YhiXKVoIYgHMuwaIP4BfbOtCQYAMS4APZoSy4JZCsGp1M7bhBEATfMQAO8JACN0tXgyNtOHgFhMREzKUsZeUVlNVMnV3cwLwg0Wix1dWwAMyZSSy4yaFTmFwBRACYyqgcPAC44RBR0a3iPEUJJCyteDWxsfn5oAEFSB2gAT2IWdjQwAFtEDGzifDliBHZiaGAOMFI5DAhiecZuA+gwbIQ0fGgHNA8mOQUD7EkITdroAF5oCgA7tA9IYWGkaL0Hk8XrdeoMRmNJtNoHsAG4YYYAeQAKtBbs47lw2FMZmgHFwEKtoFSifcWIhCmxiNloC5nAAraQkeYuLjgBCM7AlJjlKo1DwQ7BAA"}),"Hegel Playground")," - you would be notified before the incedent."),Object(a.b)("h2",{id:"why-hegel"},"Why Hegel?"),Object(a.b)("p",null,"First of all, lets explore the main goals of Hegel:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Minimalistic types syntax"),Object(a.b)("li",{parentName:"ul"},"Strong type system"),Object(a.b)("li",{parentName:"ul"},"Powerful type inference")),Object(a.b)("p",null,"But, we need to answer at this question differently for different audience. So, chose list item which discribe your experience:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#why-actually-do-we-need-static-analysis"}),"You never work with typed languages or type checkers")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#benefits-and-disadvantages-over-typescript"}),"You works with TypeScript")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#benefits-and-disadvantages-over-flowjs"}),"You works with Flow.js"))),Object(a.b)("h2",{id:"why-actually-do-we-need-static-analysis"},"Why actually do we need static analysis?"),Object(a.b)("p",null,"First of all, static analysis means that your code will be analyze without actually running. So, static type analysis will analyze your code for any type errors."),Object(a.b)("p",null,"Actually, there are 2 major benefits of static type analysis:\n1. Static type analysis find and provide to you information about a type error which existed in your code in duration of code writing. It not only gives you an garantees that you code working without runtime type errors but in addition  it realy economs a lot of time for finding and fixing errors, especially in big projects which contains a realy long build step.\n2. When you use instrument which provide type information of your variables, functions, methods, classes and etc - you have got an documentation of method usage without any additional efforts."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'function deserializeUser(stringifiedUserJson) {\n  const maybeUser = JSON.parse(stringifiedUserJson);\n  if (\n    typeof maybeUser === "object" &&\n    maybeUser !== null &&\n    "name" in maybeUser &&\n    typeof maybeUser.name === "string"\n  ) {\n    return maybeUser;\n  }\n  throw new TypeError("Provided serialized user is invalid!");\n}\n\ndeserializeUser("42");\n')),Object(a.b)("p",null,"If you will open this examplie in ",Object(a.b)("a",i({parentName:"p"},{href:"/hegel/try#GYVwdgxgLglg9mABAEwKYGdUCcYEMA2MAXqgKqZYAU6UOYA5jMDKsudgFLoICUiA3gChEiCAhqIAtrgCeAIzIVEAXkQcAygHkAcgDoADriyZqtGAyYs2FLrwDcwxE0SVHIqDP2o4wKbIXsWCrKqgBEcHIAVqjQoYgAZPFufvKK2IgAhCGIYCD4+AlJIiKhYLiSqHHmKQFKickeXj41aVi6ZRXBYTR09KGOfELFiFioUCBYSNKpgQ4iAL6OUAAWWHAA7jmomwAqnqgAolhrVKEACmsAbjBoyIgUeIQkdyBKMOhOYJcENxmhPA5FoI0A8fiRApRQgAWABM-zsQA"}),"Hegel Playground")," and will hover at ",Object(a.b)("inlineCode",{parentName:"p"},"deserializeUser")," function invokation then you will see arguments types of the function, return type of the function and which error this funcation may throw. And you've got it free."),Object(a.b)("h2",{id:"benefits-and-disadvantages-over-typescript"},"Benefits and disadvantages over TypeScript"),Object(a.b)("p",null,"If you familiar with TypeScript you may know benefits of static typing, so lets explore benefits and disadvantages of Hegel over TypeScript"),Object(a.b)("h3",{id:"benefits"},"Benefits"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Ability to skip type annotation")),Object(a.b)("p",null,"Hegel is targeting at realy powerful type inference which give an ability to write less type annotations. As example:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "promisify" function is "<q\', c\'>((c\') => q\') => (c\') => Promise<q\'>"\nconst promisify = fn => arg => Promise.resolve(fn(arg));\n\n// Type of "id" function is "<c\'>(c\') => Promise<c\'>"\nconst id = promisify(x => x);\n\n// Type of "result" variable is "Promise<number>"\nconst result = id(42).then(x => x + x);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The same example in TypeScript (tested at version 3.7.5) will show 3 errors and inference ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<any>"),' type for "result" variable ',Object(a.b)("a",i({parentName:"p"},{href:"http://www.typescriptlang.org/play/index.html?ssl=1&ssc=1&pln=7&pc=1#code/PTAEBUE8AcFNQPYDNQCJoCcEFsCWBnXJSVUJAVwDsBjAF1wUtALQB4BHAcgBpRrOAfAAoh-AJSgAvANBcJ00KM7yZABSx58sDoNQAoao3y1QmHASKQpZJgoCGGAOZS1GgrAB0GWPgQAbADdYISRKIQdHMTEAbj09EAgYeGQ0XAATUgoaekZmfDZ+YXEXUHVzLVZC-UNKY2Y06zNNSyEADxLWmLiEqDhEFFRvfHI-WlIAh1w7ACM-eBZUMs1tSnJsadgMAWqjEyGRk0l6oQAWACYxD1oAC1gw9oV2gGpQTujQIA"}),"TypeScript Example"),".")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"No unexpected runtime errors")),Object(a.b)("p",null,'One of the non-goals of TypeScript is: "Apply a sound or "provably correct" type system. Instead, strike a balance between correctness and productivity.". It means that TypeScript never will guarantee that you will not have a Type Error at Runtime. Hegel is at oposite side. We try to implement strong type system which will guarantee that your program is valid.'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'const doubles: Array<number> = [Math.PI, Math.E];\n// Error: Type "Array<number>" is incompatible with type "Array<number | string>"\nconst numbersToShow: Array<number | string> = doubles;\nnumbersToShow.push(42..toString(2));\ndoubles.map(double => double.toFixed());\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The same example in TypeScript (tested at version 3.7.5) will be valid, but unaught type error will be thrown at runtime ",Object(a.b)("a",i({parentName:"p"},{href:"http://www.typescriptlang.org/play/index.html?ssl=4&ssc=11&pln=4&pc=4#code/MYewdgzgLgBAJiArgIwDYFMIC4YEEBO+AhgJ4A8YiAtsuvgHwwC8MA2gLJFQAWAdAAoBJADQxOPXgFEAugG4AUKEixKNOhAAqIAMrcQAdxwFi5VbXwwAPjGj4AlmADmjFghQYICs+q26DvAAdECG4ACgAWACZeXigdKHsnUMiAShSFAHoMmABVMGAiREduWA0SAPRJQhB8HDc0dFiQADE7AA90OBg7CBgwEFgiGAAzRHyoO3B5eo9eKiIA0Jn0ZkZlptaOuFC02SA"}),"TypeScript Example"),".")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Typed Errors")),Object(a.b)("p",null,"Hegel implements inference and annotation for functions which give ability to understand which error type is inside catch block and which errors will by a function."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "assertIsTrue" function is "(boolean) => undefined throws TypeError"\nfunction assertIsTrue(arg) {\n    if (!arg) {\n        throw new TypeError("arg is invalid")\n    }\n}\n\ntry {\n    assertIsTrue(false);\n} catch (e) {\n    // Type of "e" variable is "TypeError | unknown"\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'The same example in TypeScript (tested at version 3.7.5) will inference e as "any" type ',Object(a.b)("a",i({parentName:"p"},{href:"http://www.typescriptlang.org/play/index.html#code/GYVwdgxgLglg9mABAQwM6oKYCcoElUAqWIGAFMlgOYCUiA3gFCLOIzCKkCEFN9TLAqAAsscAO6IwGCQQCeABwwBRLKKykARD1apWYAG7IANjAAmG6v2YBfBrYZQssvgLSYc+IiVLBjmagDcdogQyFAQQhwYtIwCAPRxiHKKiHDsGhgaiIZYMMgARkYYOohaYLIadkA"}),"TypeScript Example"),".")),Object(a.b)("h3",{id:"disadvantages"},"Disadvantages"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Minimal changes in JavaScript Syntax")),Object(a.b)("p",null,"TypeScript provide a lot of additional syntax features and syntax sugar with types, but Hegel is not. Hegel is only JavaScript with types. Lets see an example implemented in TypeScript and Hegel."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// TypeScript\nconst Entities = {\n    Plant: class Plant { },\n    Animal: class Animal { },\n    Mushrooms: class Mushrooms { }\n};\n\nfunction model<M extends object, K extends keyof M>(store: M, modelName: K): M[K] {\n    return store[modelName];\n}\n\nconst Class = model(Entities, "Plant");\n')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Hegel\nconst Entities = {\n    Plant: class Plant { },\n    Animal: class Animal { },\n    Mushrooms: class Mushrooms { }\n};\n\nfunction model<M: Object, K: $Keys<M>>(store: M, modelName: K): $PropertyType<M, K> {\n    return store[modelName];\n}\n\nconst Class = model(Entities, "Plant");\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},'No type coercion and "any" type')),Object(a.b)("p",null,'As result of atempt to implement soundness type system Hegel doesn\'t have a type coercion and "any" type.'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Error: There is no "any" type in Hegel.\nconst something: any = null;\n\n// Error: Type cast is not existed in Hegel\n(null: any).call();\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Popularity")),Object(a.b)("p",null,"As you understand, Hegel is less popular than TypeScript 😄"),Object(a.b)("h2",{id:"benefits-and-disadvantages-over-flowjs"},"Benefits and disadvantages over Flow.js"),Object(a.b)("p",null,"If you familiar with Flow.js you may know benefits of static typing, so lets explore benefits and disadvantages of Hegel over Flow.js"),Object(a.b)("h3",{id:"benefits-1"},"Benefits"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Better type inference")),Object(a.b)("p",null,'As example Flow.js docs says: "Flow does not infer generic types. If you want something to have a generic type, annotate it. Otherwise, Flow may infer a type that is less polymorphic than you expect.". It\'s because Flow.js inference function type by the function usage. Hegel inferences function type by the function declaration and as result Hegel inferenced polymorphic type.'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "id" function is "<a\'>(a\') => a\'"\nconst id = x => x;\n// Type of "num" variable is "number"\nlet num = id(4);\n// Type of "str" variable is "string"\nlet str = id("4");\n// Type of "anotherId" variable is "<a\'>(a\') => a\'"\nlet anotherId = id(id);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The same example in Flow.js (tested at version 0.119.0) will inference every variable type as union of all applied types ",Object(a.b)("a",i({parentName:"p"},{href:"https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoVxhgCoE8AOApmHFGAEQCWAJuWFAK4B2AxgC6VxNiUDOFACiYMAtgCNCAJzAAfMLzaTKTAOaywAgQA8AXGABqAEgCMASjABeAHwHDAJlPnrG4eKnqFS1es27bZyxsjB3JUFi4FHmpLMC1A2IBuDCw8IhIyclc6ADcAQyVcsRhiPgpXCWk5T2U1OV89IwDnYNNQ4rYwVxiaAQAWUyTMHAJiUgpPHPzKQuKefkzRCo9FGp9tBpMnIPtW1Hb5RW7qAXJe8gHk4bSx8lymODYACykASVowPIKikvny9yqVt46ut-FtbCE9oQOncHs9JG8jgIaAMgA"}),"Flow.js Example"),".")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Typed Errors")),Object(a.b)("p",null,"Hegel implements inference and annotation for functions which give ability to understand which error type is inside catch block and which errors will by a function."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Type of "assertIsTrue" function is "(boolean) => undefined throws TypeError"\nfunction assertIsTrue(arg) {\n    if (!arg) {\n        throw new TypeError("arg is invalid")\n    }\n}\n\ntry {\n    assertIsTrue(false);\n} catch (e) {\n    // Type of "e" variable is "TypeError | unknown"\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'The same example in Flow.js (tested at version 0.119.0) will inference e as "empty" type ',Object(a.b)("a",i({parentName:"p"},{href:"https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoVUCuA7AxgFwEs5swBDAZwoFMAnfASQoBVbNqAKM2gcwEowAb1RhRYQlDAcAhN35CRYpfgAWtRGGzUkzAJ4AHagFFa62hwBEc8RXHYAbmRiEAJhb6LRAX1Q-U+Wl0FJUoaeiZWdg4oJxo+AG5fMFwyfFwVKWoBYSVgYDA9QzA4SQtqCzBHWkIyACMYahswMoBbfXxdC19UIA"}),"Flow.js Example"),".")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"No custom library definition language")),Object(a.b)("p",null,'Flow.js has an custom library definition languages and doesn\'t support the most popular TypeScript "d.ts" format. But for Hegel TypeScript "d.ts" it the only way to create type definition for library. So, every library which has TypeScript defintions should work with Hegel.'),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"No OCaml in source code")),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"https://ocaml.org/"}),"OCaml")," is realy great language and this language inspired us to implement the same type inference in Hegel, but the problem is that it's not common language (aspecialy for developer which work with JavaScript stack) and as result it's hard for JavaScript community to contribute into the Flow.js.\nWe decided to implement Hegel in JavaScript."),Object(a.b)("h3",{id:"disadvantages-1"},"Disadvantages"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'No type coercion and "any" type')),Object(a.b)("p",null,'As result of atempt to implement soundness type system Hegel doesn\'t have a type coercion and "any" type.'),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Error: There is no "any" type in Hegel.\nconst something: any = null;\n\n// Error: Type cast is not existed in Hegel\n(null: any).call();\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Popularity")),Object(a.b)("p",null,"And yes. As you understand, Hegel is less popular than Flow.js too 😄"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/what-and-why.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-what-and-why-mdx-d09b1a474fa5e2b063b6.js.map