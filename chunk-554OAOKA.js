import{Q as s,T as p,i,k as a,n as c,o as r,p as o,q as d,u as m}from"./chunk-YLYDPKC5.js";var f=`import {
    getMainModule
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classDeclaration = getMainModule('src/main.ts');
`,e=class e{constructor(){this.code=f}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Get main module"],["filename","migration.ts",3,"code"]],template:function(t,u){t&1&&(r(0,"tui-doc-page",0)(1,"p"),m(2,"Finds a main module of Angular application in path pattern"),o(),d(3,"tui-doc-code",1),o()),t&2&&(i(3),c("code",u.code))},dependencies:[s,p],encapsulation:2,changeDetection:0});var n=e;export{n as default};
