import{Q as m,T as p,i as c,k as r,n as s,o as n,p as o,q as a,u as l}from"./chunk-CZFUURF6.js";var f=`import {
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

createSourceFile('some/path/file.ts', 'const a = "hello";');

const sourceFiles = getSourceFiles('some/**/*.ts');

// It gets a function that process every file
moveSourceFilePaths(sourceFiles, dasherize);

saveActiveProject();
`,e=class e{constructor(){this.code=f}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Source files"],["filename","migration.ts",3,"code"]],template:function(t,u){t&1&&(n(0,"tui-doc-page",0)(1,"p"),l(2,"You can create, get and move sources files of the project and their paths."),o(),a(3,"tui-doc-code",1),o()),t&2&&(c(3),s("code",u.code))},dependencies:[m,p],encapsulation:2,changeDetection:0});var i=e;export{i as default};
