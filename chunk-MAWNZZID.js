import{Q as m,T as p,i as a,k as i,n as r,o as c,p as n,q as s,u as d}from"./chunk-S62IZVSW.js";var g=`import {
    addInterfaces,
    editInterfaces,
    getInterfaces,
    removeInterfaces,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addInterfaces('some/path/file.ts', {
    name: 'A',
    properties: [{ name: 's', type: 'string' }],
    methods: [{ name: 'method', returnType: 'number' }],
});

const declarations = getInterfaces('some/path/**.ts');

editInterfaces(declarations, () => ({
    name: 'B',
}));

removeInterfaces(declarations);

saveActiveProject();
`,e=class e{constructor(){this.interfaces=g}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i({type:e,selectors:[["ng-component"]],decls:4,vars:1,consts:[["header","Interfaces"],["filename","migration.ts",3,"code"]],template:function(t,l){t&1&&(c(0,"tui-doc-page",0)(1,"p"),d(2,"You can create, get, edit and remove interfaces in your files with declarative descriptions and conditions."),n(),s(3,"tui-doc-code",1),n()),t&2&&(a(3),r("code",l.interfaces))},dependencies:[m,p],encapsulation:2,changeDetection:0});var o=e;export{o as default};
