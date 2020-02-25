(this.webpackJsonp=this.webpackJsonp||[]).push([[18],{1309:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n(19),n(5),n(3),n(1),n(13),n(14),n(22);var s=n(59),a=n(66);n(36);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/type-aliases.mdx"}});var i={_frontmatter:o},c=a.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(s.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"type-aliases"},"Type Aliases"),Object(s.b)("hr",null),Object(s.b)("p",null,'Sometimes your type annotations become realy long, so you need some mechanisms which help you to don\'t repeat yourself. And prevent "copy-paste" errors.'),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const user: {\n  email: string,\n  password: string\n} = { email: "test.email@gmail.com", password: "qwerty" };\n\nconst copyOfOriginalUser: {\n  email: string,\n  password: string\n} = user;\n\n//-------------------\n\nfunction createResponse(status: "Success" | "Failed"): { status: "Success" | "Failed" } {\n  return { status }\n}\n')),Object(s.b)("p",null,"One of them is type alisases. Type aliases create a new name for a type which.\nType aliases can be created using the keyword ",Object(s.b)("inlineCode",{parentName:"p"},"type")," followed by its name, an equals sign ",Object(s.b)("inlineCode",{parentName:"p"},"="),", and a type definition. You can place any valid type definition after equals sign ",Object(s.b)("inlineCode",{parentName:"p"},"="),"."),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Type alias for object type\ntype User = {\n  email: string,\n  password: string\n};\n\nconst user: User = { email: "test.email@gmail.com", password: "qwerty" };\nconst copyOfOriginalUser: User = user;\n\n//-------------------\n\n// Type alias for union type\ntype Status = "Success" | "Failed";\n\nfunction createResponse(status: Status): { status: Status } {\n  return { status }\n}\n')),Object(s.b)("p",null,"Aliasing doesn’t create a new type - it creates a new name to refer to source type."),Object(s.b)("h2",{id:"interfaces"},"Interfaces"),Object(s.b)("p",null,"Also you can use ",Object(s.b)("inlineCode",{parentName:"p"},"implements")," with object type aliases for ",Object(s.b)("a",r({parentName:"p"},{href:"/hegel/docs/class-types"}),"Class Types"),' to tell Hegel that you want that a class to match an "protocol".'),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'type JsonSerializable = {\n  toJSON: () => Object,\n  ...\n};\n\nclass User implements JsonSerializable {\n  email: string;\n  password: string;\n  \n  constructor(email, password) {\n    this.email = email;\n    this.password = password;\n  }\n\n  toJSON() {\n    return {\n      email: this.email,\n      password: this.password,\n      _type: "User"\n    };\n  }\n}\n\nconst json: JsonSerializable = new User("test@gmail.com", "qwerty");\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note, that your object type which should act like interface should be a soft object type.")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/type-aliases.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-type-aliases-mdx-8a732de67a0119e3d36d.js.map