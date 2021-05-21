import { ChangeDetectionStrategy, Component } from '@angular/core';

const creatingRule = `import {
    setActiveProject,
    saveActiveProject,
    createProject,
    getImports,
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
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';

// We can emulate filesystem with ng-morph
import {
    createProject,
    resetActiveProject,
    setActiveProject,
    createSourceFile,
    saveActiveProject,
} from 'ng-morph';

// And import the schematics itself
import migration from './index';

describe('ng-add', () => {
    describe('removes old postfix', () => {
        let host: UnitTestTree;

        beforeEach(() => {
            host = new UnitTestTree(new HostTree());

            // preparing virtual file tree with one file
            setActiveProject(createProject(host));

            createSourceFile(
                'src/module.ts',
                "import {a} from '@morph-old/core';",
            );

            saveActiveProject();
        });

        it('should replace old with new in TS imports', () => {
            // Our migration returns rule
            const rule = migration();

            // we process our emulated files
            rule(host, {} as any);

            expect(host.readContent('src/module.ts')).toEqual(
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
  readonly creatingRule = creatingRule;
  readonly creatingSpec = creatingSpec;
}
