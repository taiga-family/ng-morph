export const DECORATORS_SAMPLES = `import {
    addDecorators,
    getDecorators,
    editDecorators,
    removeDecorators,
    setActiveProject,
    saveActiveProject,
} from '@taiga-ui/morph';

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
`;
