import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getFunctions,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';
import {Node} from 'ts-morph';

describe('getFunctions', () => {
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

    it('should find all functions', () => {
        const functions = getFunctions('some/**/**.ts');

        expect(functions.map(Node.isFunctionDeclaration)).toEqual([true]);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
