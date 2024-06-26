import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editImports,
    getImports,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('editImports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
import { a } from 'b';

console.log(a);
`,
        );
    });

    it('should edit imports', () => {
        const imports = getImports('some/path/file.ts');

        editImports(imports, () => ({
            namedImports: ['b,c'],
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
import { b,c } from 'b';

console.log(a);
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
