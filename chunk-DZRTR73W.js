import{Q as f,S as u,T as g,i as s,k as l,m as x,n,o as r,p as i,q as m,t as c,u as a}from"./chunk-S62IZVSW.js";function v(o,p){if(o&1&&(r(0,"p"),a(1,"You can create, get, edit and remove imports in your files with declarative descriptions and conditions."),i(),m(2,"tui-doc-code",3)),o&2){let e=c();s(2),n("code",e.imports)}}function I(o,p){if(o&1&&(r(0,"p"),a(1,"You can create, get, edit and remove exports in your files with declarative descriptions and conditions."),i(),m(2,"tui-doc-code",3)),o&2){let e=c();s(2),n("code",e.exports)}}var E=`import {
    addImports,
    editImports,
    getImports,
    removeImports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addImports('some/path/file.ts', [
    {
      namedImports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      defaultImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedImports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const imports = getImports('some/path/**.ts', {
    moduleSpecifier: 'd',
    namedImports: 'c',
});

editImports(imports, () => ({
    namedImports: ['b,c'],
}));

removeImports(imports);

saveActiveProject();
`,h=`import {
    addExports,
    editExports,
    getExports,
    removeExports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addExports('some/path/file.ts', [
    {
      namedExports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceExport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedExports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const exports = getExports('some/path/**.ts', {
    moduleSpecifier: 'd',
});

editExports(exports, () => ({
    namedExports: ['b,c'],
}));

removeExports(exports);

saveActiveProject();
`,t=class t{constructor(){this.imports=E;this.exports=h}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[["header","Imports and exports"],["pageTab","Imports"],["pageTab","Exports"],["filename","migration.ts",3,"code"]],template:function(e,y){e&1&&(r(0,"tui-doc-page",0),x(1,v,3,1,"ng-template",1)(2,I,3,1,"ng-template",2),i())},dependencies:[f,g,u],encapsulation:2,changeDetection:0});var d=t;export{d as default};
