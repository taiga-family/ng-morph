import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addExports} from './add-exports';

describe('addExports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
console.log(a);
`,
        );
    });

    it('should add exports', () => {
        addExports('some/path/file.ts', [
            {
                namedExports: ['a'],
                moduleSpecifier: 'b',
            },
            {
                namespaceExport: 'c',
                moduleSpecifier: 'd',
            },
            {
                namedExports: ['e'],
                moduleSpecifier: 'f',
                isTypeOnly: true,
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toEqual(`
console.log(a);
export { a } from "b";
export * as c from "d";
export type { e } from "f";
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
