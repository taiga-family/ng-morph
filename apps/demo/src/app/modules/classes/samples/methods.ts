export const METHODS_SAMPLES = `import {
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
`;
