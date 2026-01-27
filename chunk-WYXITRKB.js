import{Q as l,T as m,i as a,k as d,n as r,o,p as t,q as p,u as e}from"./chunk-FXTWYKQG.js";var g=`import {
    getBootstrapFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapFn('src/main.ts');
`,f=`import {
    getBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');
`,A=`import {
    getBootstrapApplicationFn,
    addProviderToBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

addProviderToBootstrapApplicationFn(bootstrapFn, 'provideRouter()');
`,n=class n{constructor(){this.bootstrap=g;this.bootstrapApplication=f;this.addProviders=A}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=d({type:n,selectors:[["ng-component"]],decls:22,vars:3,consts:[["header","Get bootstrap function"],["filename","migration.ts",3,"code"]],template:function(i,c){i&1&&(o(0,"tui-doc-page",0)(1,"section")(2,"h2"),e(3,"Module Application"),t(),o(4,"p"),e(5,"Finds a bootstrap function of Angular application with a path pattern"),t(),p(6,"tui-doc-code",1),t(),o(7,"section")(8,"h2"),e(9,"Standalone Application"),t(),o(10,"p"),e(11,"Finds a bootstrap application function with a path pattern"),t(),p(12,"tui-doc-code",1),t(),o(13,"section")(14,"h2"),e(15,"Add providers to standalone Application"),t(),o(16,"p"),e(17," To add providers to standalone application you need to use "),o(18,"code"),e(19,"addProviderToBootstrapApplicationFn"),t(),e(20," function "),t(),p(21,"tui-doc-code",1),t()()),i&2&&(a(6),r("code",c.bootstrap),a(6),r("code",c.bootstrapApplication),a(9),r("code",c.addProviders))},dependencies:[l,m],encapsulation:2,changeDetection:0});var s=n;export{s as default};
