export const PROPERTIES_SAMPLES = `import {
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
`;
