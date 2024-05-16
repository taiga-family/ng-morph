import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {editExports} from './edit-exports';
import {getExports} from './get-exports';

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
