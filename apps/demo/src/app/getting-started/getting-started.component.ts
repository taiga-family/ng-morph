import {ChangeDetectionStrategy, Component} from '@angular/core';

const script = `import {
  setActiveProject,
  createProject,
  getImports,
  NgMorphTree,
} from 'ng-morph';

/**
 * set all ng-morph functions to work with the all TS and JSON files
 * of the current project
 * */
setActiveProject(
  createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json'])
);

/**
 * This simple migration gets all imports from the project TS files and
 * replaces 'old' substring with 'new'
 * */
const imports = getImports('some/path/**.ts', {
    moduleSpecifier: '@morph-old*',
});

editImports(imports, importEntity => ({
    moduleSpecifier: importEntity.moduleSpecifier.replace('old', 'new')
}));

/**
 * All changes are made in a virtual project.
 * You can save them when it is time
 * */
saveActiveProject();
`;

const creatingRule = `import {
    setActiveProject,
    saveActiveProject,
    createProject,
    getImports,
    editImports,
} from 'ng-morph';

export default (): Rule => {
    return tree => {
        /**
         * set all ng-morph functions to work with the all TS and JSON files
         * of the current project
         * */
        setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

        /**
         * This function gets all imports from the project TS files and
         * replaces 'old' substring with 'new'
         * */
        const imports = getImports('some/path/**.ts', {
            moduleSpecifier: '@morph-old*',
        });

        editImports(imports, importEntity => ({
            moduleSpecifier: importEntity.moduleSpecifier.replace('old', 'new')
        }));

        /**
         * All changes are made in a virtual project.
         * You can save them when it is time
         * */
        saveActiveProject();
    };
};`;

const creatingSpec = `
// We use schematics devkit to emulate virtual Tree
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';

// We can emulate filesystem with ng-morph
import {
    createProject,
    resetActiveProject,
    setActiveProject,
    createSourceFile,
    saveActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../collection.json');

describe('ng-add', () => {
    describe('removes old postfix', () => {
        let host: UnitTestTree;
        let runner: SchematicTestRunner;

        beforeEach(() => {
            host = new UnitTestTree(new HostTree());
            runner = new SchematicTestRunner('schematics', collectionPath);

            // preparing virtual file tree with one file
            setActiveProject(createProject(host));

            createSourceFile(
                'src/module.ts',
                "import {a} from '@morph-old/core';",
            );

            saveActiveProject();
        });

        it('should replace old with new in TS imports', async () => {
            expect.assertions(1);

            // Our migration returns Tree
            const tree = await runner.runSchematicAsync('ng-add', {}, host).toPromise();

            expect(tree.readContent('src/module.ts')).toEqual(
                "import {a} from '@morph-new/core';",
            );
        });

        afterEach(() => {
            // clear it up
            resetActiveProject();
        });
    });
});
`;

@Component({
    selector: 'getting-started',
    templateUrl: './getting-started.template.html',
    styles: [':host {max-width: 1200px}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
    protected readonly script = script;
    protected readonly creatingRule = creatingRule;
    protected readonly creatingSpec = creatingSpec;
}
