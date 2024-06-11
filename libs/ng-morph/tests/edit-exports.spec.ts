import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

import {editExports} from '../src/exports/edit-exports';
import {getExports} from '../src/exports/get-exports';

describe('editExports', () => {
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

    it('should edit exports', () => {
        const exports = getExports('some/path/file.ts');

        editExports(exports, () => ({
            namedExports: ['b,c'],
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
export { b,c } from 'b';

console.log(a);
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
