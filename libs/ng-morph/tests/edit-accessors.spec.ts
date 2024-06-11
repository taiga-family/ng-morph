import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editAccessors,
    getAccessors,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('editAccessors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  set setter(value){

  }
}
    `,
        );
    });

    it('should edit accessors', () => {
        const declarations = getAccessors(getClasses('some/path/file.ts'));

        editAccessors(declarations, () => ({
            name: 'anotherName',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  set anotherName(value){

  }
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
