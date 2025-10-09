import{Q as v,S as u,T as h,i as a,k as p,m as g,n as c,o,p as e,q as n,t as m,u as r}from"./chunk-S62IZVSW.js";var P=`import {
    addAccessors,
    getAccessors,
    editAccessors,
    removeAccessors,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addAccessors(getClasses('some/path/file.ts'), [
    {
      name: 'setter',
      kind: StructureKind.SetAccessor,
    },
]);

const declarations = getAccessors(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editAccessors(declarations, () => ({
    name: 'anotherName',
}));

removeAccessors(declarations);

saveActiveProject();
`;var C=`import {
    addConstructors,
    getConstructors,
    editConstructors,
    removeConstructors,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addConstructors(getClasses('some/path/file.ts', { name: 'B' }), {
    parameters: [
      {
        decorators: [{ name: 'Inject', arguments: ['SomeType'] }],
        name: 'param',
        type: 'SomeType',
      },
    ],
    scope: Scope.Protected,
});

// Result is:
class B {
    protected constructor(@Inject(SomeType) param: SomeType) {}
}

const declarations = getConstructors(getClasses('some/path/**.ts'));

editConstructors(declarations, () => ({
    scope: Scope.Protected,
}));

removeConstructors(declarations);

saveActiveProject();
`;var A=`import {
    addDecorators,
    getDecorators,
    editDecorators,
    removeDecorators,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classes = getClasses('some/path/file.ts');
const methods = getMethods(classes, { name: 'method' });
const constructorParams = getParams(getConstructors(classes), {
  name: 'param',
});
const methodParams = getParams(methods);
const properties = getProperties(classes, { name: 'property' });
const getAccessorss = getAccessors(classes, { name: 'getAccessor' });
const setAccessors = getAccessors(classes, { name: 'setAccessor' });

addDecorators(classes, {
  name: 'Component',
  arguments: ["{template: ''}"],
});

addDecorators(methods, {
  name: 'Required',
  arguments: [],
});

addDecorators(constructorParams, {
  name: 'Optional',
  arguments: [],
});

addDecorators(methodParams, {
  name: 'Pure',
  arguments: [],
});

addDecorators(properties, {
  name: 'ContentChild',
  arguments: ['SomeComponent'],
});

addDecorators(getAccessorss, {
  name: 'AnotherDecorator',
  arguments: ['SomeComponent', "['string']"],
});

addDecorators(setAccessors, {
  name: 'SetDecorator',
  arguments: ["[1, 3]"],
});

const declarations = getAllDecorators('some/path/**.ts', {
    name: 'Inject',
});

editDecorators(declarations, () => ({
    name: 'Directive',
}));

removeDecorators(declarations);

saveActiveProject();
`;var S=`import {
    addMethods,
    getMethods,
    editMethods,
    removeMethods,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addMethods(getClasses('some/path/file.ts', { name: 'B' }), {
    name: 'test',
    statements: 'return 0;',
    returnType: 'number',
});

const declarations = getMethods(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editMethods(declarations, ({ isAsync }) => ({
    name: 'b',
    isAsync: !isAsync,
}));

removeMethods(declarations);

saveActiveProject();
`;var f=`import {
    addProperties,
    getProperties,
    editProperties,
    removeProperties,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addProperties(getClasses('some/path/file.ts', { name: 'B' }), {
    name: 'test',
    initializer: '3',
});

const declarations = getProperties(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editProperties(declarations, () => ({
    name: 'b',
    initializer: "'s'",
}));

removeProperties(declarations);

saveActiveProject();
`;function x(s,i){if(s&1&&(o(0,"p"),r(1,"You can manipulate with classes using the following utils"),e(),o(2,"section")(3,"h2"),r(4,"Add classes"),e(),o(5,"p"),r(6,"You can generate a class from declarative description. Use autocomplete to check all the abilities."),e(),n(7,"tui-doc-code",7),e(),o(8,"section")(9,"h2"),r(10,"Get classes"),e(),o(11,"p"),r(12,"You can get all classes with some declarative condition. Use autocomplete to check all the abilities."),e(),n(13,"tui-doc-code",7),e(),o(14,"section")(15,"h2"),r(16,"Edit classes"),e(),o(17,"p"),r(18," You can edit existing classes with a handler returining a declarative description. Use autocomplete to check all the abilities. "),e(),n(19,"tui-doc-code",7),e(),o(20,"section")(21,"h2"),r(22,"Remove classes"),e(),o(23,"p"),r(24," You can remove all classes with some declarative condition. Use autocomplete to check all the abilities. "),e(),n(25,"tui-doc-code",7),e()),s&2){let t=m();a(7),c("code",t.add),a(6),c("code",t.getClasses),a(6),c("code",t.edit),a(6),c("code",t.remove)}}function j(s,i){if(s&1&&(o(0,"p"),r(1," You can create, get, edit and remove constructors of your classes with declarative descriptions and conditions. "),e(),n(2,"tui-doc-code",7)),s&2){let t=m();a(2),c("code",t.constructors)}}function E(s,i){if(s&1&&(o(0,"p"),r(1," You can create, get, edit and remove methods of your classes with declarative descriptions and conditions. "),e(),n(2,"tui-doc-code",7)),s&2){let t=m();a(2),c("code",t.methods)}}function T(s,i){if(s&1&&(o(0,"p"),r(1," You can create, get, edit and remove properties of your classes with declarative descriptions and conditions. "),e(),n(2,"tui-doc-code",7)),s&2){let t=m();a(2),c("code",t.properties)}}function y(s,i){if(s&1&&(o(0,"p"),r(1," You can create, get, edit and remove accessors of your classes with declarative descriptions and conditions. "),e(),n(2,"tui-doc-code",7)),s&2){let t=m();a(2),c("code",t.accessors)}}function _(s,i){if(s&1&&(o(0,"p"),r(1," You can create, get, edit and remove decorators of your classes with declarative descriptions and conditions. "),e(),n(2,"tui-doc-code",7)),s&2){let t=m();a(2),c("code",t.decorators)}}var M=`import {
    addClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts']));

addClasses('some/path/file.ts', {
    name: 'A',
    isDefaultExport: true,
    methods: [
      {
        name: 'method',
        isStatic: true,
        statements: 'return 0',
        returnType: 'number',
      },
    ],
});

saveActiveProject();
`,D=`import {
    getClasses,
    editClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classes = getClasses('some/path/file.ts');

editClasses(classes, classEntity => ({
  isExported: true,
  name: classEntity.name.replace('Test', ''),
}));

saveActiveProject();
`,w=`import {
    removeClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

removeClasses(getClasses('**/**', { name: 'A' }));`,b=`import {
    getClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const allClassesWithNameB = getClasses('some/path/**.ts', {
    name: 'B',
});

saveActiveProject();
`,d=class d{constructor(){this.add=M;this.edit=D;this.remove=w;this.getClasses=b;this.accessors=P;this.methods=S;this.properties=f;this.decorators=A;this.constructors=C}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=p({type:d,selectors:[["ng-component"]],decls:7,vars:0,consts:[["header","Classes"],["pageTab","Classes"],["pageTab","Constructors"],["pageTab","Methods"],["pageTab","Properties"],["pageTab","Accessors"],["pageTab","Decorators"],["filename","migration.ts",3,"code"]],template:function(t,R){t&1&&(o(0,"tui-doc-page",0),g(1,x,26,4,"ng-template",1)(2,j,3,1,"ng-template",2)(3,E,3,1,"ng-template",3)(4,T,3,1,"ng-template",4)(5,y,3,1,"ng-template",5)(6,_,3,1,"ng-template",6),e())},dependencies:[v,h,u],encapsulation:2,changeDetection:0});var l=d;export{l as default};
