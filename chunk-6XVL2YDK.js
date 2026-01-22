import{Q as d,T as m,i as s,k as a,n,o as c,p as i,q as p,u as r}from"./chunk-G4GINXDI.js";var f=`import {
    addTypeAliases,
    editTypeAliases,
    getTypeAliases,
    removeTypeAliases,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addTypeAliases('some/path/file.ts', {
    name: 'A',
    typeParameters: ['T'],
    type: 'T[]',
});

const declarations = getTypeAliases('some/path/file.ts');

editTypeAliases(declarations, () => ({
    name: 'B',
}));

removeTypeAliases(declarations);

saveActiveProject();
`,e=class e{constructor(){this.types=f}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Types"],["filename","migration.ts",3,"code"]],template:function(t,y){t&1&&(c(0,"tui-doc-page",0)(1,"p"),r(2,"You can create, get, edit and remove types in your files with declarative descriptions and conditions."),i(),p(3,"tui-doc-code",1),i()),t&2&&(s(3),n("code",y.types))},dependencies:[d,m],encapsulation:2,changeDetection:0});var o=e;export{o as default};
