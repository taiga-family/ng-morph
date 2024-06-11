import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getExports,
    removeExports,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('removeExports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
export { a } from 'b';

console.log(a);
`,
        );
    });

    it('should remove exports', () => {
        const exports = getExports('some/path/file.ts');

        removeExports(exports);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
console.log(a);
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
