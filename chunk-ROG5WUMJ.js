import{Q as d,T as p,i,k as s,n as a,o as m,p as n,q as c,u as r}from"./chunk-7VYBE2II.js";var f=`import {
    addEnums,
    editEnums,
    getEnums,
    removeEnums,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addEnums('some/path/file.ts', [
    {
      name: 'Enum',
      isConst: true,
      members: [{ name: 'First' }, { name: 'second' }],
    },
    {
      name: 'EmptyEnum',
      isExported: true,
    },
]);

const declarations = getEnums('some/path/**.ts');

editEnums(declarations, () => ({
    name: 'B',
}));

removeEnums(declarations);

saveActiveProject();
`,e=class e{constructor(){this.code=f}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Enums"],["filename","migration.ts",3,"code"]],template:function(t,l){t&1&&(m(0,"tui-doc-page",0)(1,"p"),r(2,"You can create, get, edit and remove enums in your files with declarative descriptions and conditions."),n(),c(3,"tui-doc-code",1),n()),t&2&&(i(3),a("code",l.code))},dependencies:[d,p],encapsulation:2,changeDetection:0});var o=e;export{o as default};
