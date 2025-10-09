import{Q as m,T as p,i,k as c,n as s,o as a,p as n,q as r,u as d}from"./chunk-YLYDPKC5.js";var f=`import {
    addFunctions,
    editFunctions,
    getFunctions,
    removeFunctions,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addFunctions('some/**/**.ts', {
    isExported: true,
    name: 'b',
    statements: "return 'b'",
});

const declarations = getFunctions('some/path/**.ts');

editFunctions(functions, () => ({
    isExported: true,
    name: 'b',
    statements: "return 'b'",
}));

removeFunctions(declarations);

saveActiveProject();
`,e=class e{constructor(){this.code=f}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Functions"],["filename","migration.ts",3,"code"]],template:function(t,l){t&1&&(a(0,"tui-doc-page",0)(1,"p"),d(2,"You can create, get, edit and remove functions in your files with declarative descriptions and conditions."),n(),r(3,"tui-doc-code",1),n()),t&2&&(i(3),s("code",l.code))},dependencies:[m,p],encapsulation:2,changeDetection:0});var o=e;export{o as default};
