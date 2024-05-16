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

import {editFunctions} from './edit-functions';
import {getFunctions} from './get-functions';

describe('editFunctions', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
function a(){
  return 'a'
}
`,
        );
    });

    it('should rename a function', () => {
        const functions = getFunctions('some/**/**.ts');

        editFunctions(functions, () => ({
            isExported: true,
            name: 'b',
            statements: "return 'b'",
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
export function b(){
    return 'b'
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
