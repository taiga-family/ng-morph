export const PROPERTIES_SAMPLES = `import {
    addProperties,
    getProperties,
    editProperties,
    removeProperties,
} from 'ng-morph/project';

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
`;