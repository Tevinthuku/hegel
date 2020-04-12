(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{1327:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return l}));n(17),n(4),n(3),n(1),n(12),n(10),n(22);var r=n(59),s=n(65);n(36);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/tuple-types.mdx"}});var o={_frontmatter:p},u=s.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(r.b)(u,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tuple-types"},"Tuple Types"),Object(r.b)("hr",null),Object(r.b)("p",null,"The same as ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/primitive-types"}),"Primitive Types")," and ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/primitive-types"}),"Object Types"),", Hegel provides support for usage array literal as type, and this array literal types called Tuples. Tuple types allow you to define an array with a fixed number of elements with known types. The syntax fo tuple types is ",Object(r.b)("inlineCode",{parentName:"p"},"[type1, type2, type3]"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const tuple: [string, number] = ["", 0];\n')),Object(r.b)("h2",{id:"getting-element-from-tuple"},"Getting element from Tuple"),Object(r.b)("p",null,"Unlike ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/array-types"}),"Array Types")," Tuple will return strict type which is placed at position in tuple type definition and will show an error, if you try to access out of tuple range."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const tuple: [string, number] = ["", 0];\n\n// first type is "string"\nconst first = tuple[0];\n\n// second type is "number"\nconst second = tuple[1];\n\n// Error: Property "2" does not exist in "[string, number]"\nconst third = tuple[2];\n')),Object(r.b)("p",null,"Also, unlike ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/array-types"}),"Array Types"),', Tuples have strict defined type for length and as result they cannot mutate "length" property in a tuple type.'),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const tuple: [string, number] = ["", 0];\n\n// length type is "2"\nconst length = tuple.length;\n\n// Error: Type "3" is incompatible with type "2"\ntuple.length = 3;\n')),Object(r.b)("h2",{id:"tuple-methods-and-mutation"},"Tuple methods and mutation"),Object(r.b)("p",null,"As you may understand, Hegel provides the same methods for Tuples Types as for ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/array-types"}),"Array Types"),", but with one exception. If you try to use any of methods from Array which will mutate source tuple (",Object(r.b)("a",a({parentName:"p"},{href:"https://doesitmutate.xyz/"}),"https://doesitmutate.xyz/"),") you will have an error. "),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const numbers: [number, number, number] = [1, 2, 3];\nconst plusOne = numbers.map(a => a + 1);\nconst lessThan3 = numbers.filter(a => a < 3);\n\n// Error: Property "reverse" does not exist in "[number, number, number]"\nconst reversed = numbers.reverse();\n')),Object(r.b)("h2",{id:"subtyping"},"Subtyping"),Object(r.b)("p",null,"The same as ",Object(r.b)("a",a({parentName:"p"},{href:"/hegel/docs/array-types"}),"Array Types")," Tuple types have invariant nature, so you can't assign to one tuple another with wider element type or with greater or less elements count."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const source: [number, number] = [0, 0];\n\n// Error: Type "[number, number]" is incompatible with type "[number | string, number]"\nconst widerByElementType: [number | string, number] = source;\n\n// Error: Type "[number, number]" is incompatible with type "[number, number, number]"\nconst widerByElementsCount: [number, number, number] = source;\n\n// Error: Type "[number, number]" is incompatible with type "[number]"\nconst narrowerByElementsCount: [number] = source;\n')),Object(r.b)("p",null,"And also tuples don’t match array types:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'const source: [number, number] = [0, 0];\n\n// Error: Type "[number, number]" is incompatible with type "Array<number>"\nconst array: Array<number> = source;\n')))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/tuple-types.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-tuple-types-mdx-3176f5352c5f114c8eb1.js.map