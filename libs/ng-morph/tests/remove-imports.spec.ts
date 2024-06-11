import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getImports,
    removeImports,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('removeImports', () => {
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

    it('should remove imports', () => {
        const imports = getImports('some/path/file.ts');

        removeImports(imports);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
console.log(a);
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
