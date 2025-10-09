import{Q as l,T as m,i as o,k as n,n as r,o as s,p as t,q as c,u as d}from"./chunk-I2NUB5CL.js";var v=`import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addVariables('some/path/file.ts', {
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: 'name',
        initializer: "'value'",
      },
    ],
});

const declarations = getVariables('some/path/**.ts');

editVariables(declarations, () => ({
    name: 'B',
}));

removeVariables(declarations);

saveActiveProject();
`,e=class e{constructor(){this.code=v}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n({type:e,selectors:[["variables"]],decls:4,vars:1,consts:[["header","Variables"],["filename","migration.ts",3,"code"]],template:function(a,f){a&1&&(s(0,"tui-doc-page",0)(1,"p"),d(2,"You can create, get, edit and remove variables in your files with declarative descriptions and conditions."),t(),c(3,"tui-doc-code",1),t()),a&2&&(o(3),r("code",f.code))},dependencies:[l,m],encapsulation:2,changeDetection:0});var i=e;export{i as default};
