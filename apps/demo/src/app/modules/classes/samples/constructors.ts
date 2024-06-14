export const CONSTRUCTORS_SAMPLES = `import {
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
`;
