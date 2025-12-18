import{M as p,Q as l,T as g,i as c,k as i,n as m,o as t,p as o,q as s,u as e}from"./chunk-7VYBE2II.js";var f=`import {
  setActiveProject,
  createProject,
  NgMorphTree,
  getClasses,
  getParams,
  getConstructors,
  saveActiveProject,
  getImports,
  editImports,
} from 'ng-morph';

setActiveProject(
  createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json'])
);

const components = getClasses('**/*.ts', {
  name: '*Component',
});

components.forEach((component) => {
  const constructorParams = getParams(getConstructors(component));

  if (constructorParams.length === 0) {
    return;
  }

  fixInjectImport(component.getSourceFile().getFilePath());

  component.insertProperties(
    0,
    constructorParams.map((param) => ({
      name: param.getName(),
      type: param.getTypeNode().getText(),
      isReadonly: param.isReadonly(),
      scope: param.getScope(),
      initializer: \`inject(\${
        param.getDecorator('Inject')?.getArguments()[0].getText() ??
        param.getTypeNode().getText()
      })\`,
    }))
  );

  constructorParams.forEach((param) => {
    param.remove();
  });

  console.log(component.getSourceFile().getText());
});

// Uncomment the next line once you are ready to save the changes
// saveActiveProject();

console.log(
  'Uncomment saveActiveProject function once you are ready to save...'
);
console.log('ng-morph \u2705');

function fixInjectImport(file: string) {
  const angularCoreImports = getImports(file, {
    moduleSpecifier: '@angular/core',
  });

  editImports(angularCoreImports, (entity) => ({
    namedImports: [...entity.namedImports, 'inject'],
  }));
}`,n=class n{constructor(){this.example=f}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=i({type:n,selectors:[["ng-component"]],decls:14,vars:1,consts:[["header","@Inject -> inject example"],["href","https://stackblitz.com/edit/ts-angular-13-web-container-starter-ozrudz?file=ng-morph-scripts%2Fscript.ts,src%2Fapp%2Fapp.component.html","rel","noreferrer","target","_blank","tuiLink",""],["filename","migration.ts",3,"code"]],template:function(r,u){r&1&&(t(0,"tui-doc-page",0)(1,"p"),e(2," This is an example of code that migrates your project from "),t(3,"code"),e(4,"@Inject"),o(),e(5," constructor injections to "),t(6,"code"),e(7,"inject"),o(),e(8," function "),o(),t(9,"p"),e(10," You can also try it out on "),t(11,"a",1),e(12," Stackblitz "),o()(),s(13,"tui-doc-code",2),o()),r&2&&(c(13),m("code",u.example))},dependencies:[l,g,p],encapsulation:2,changeDetection:0});var a=n;export{a as default};
