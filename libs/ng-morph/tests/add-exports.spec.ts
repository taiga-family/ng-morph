import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addExports,
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

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

        expect(host.readContent('some/path/file.ts')).toBe(`
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
