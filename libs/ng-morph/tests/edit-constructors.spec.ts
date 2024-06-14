import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editConstructors,
    getClasses,
    getConstructors,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {Scope} from 'ts-morph';

describe('editConstructors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  constructor(){

  }
}
    `,
        );
    });

    it('should edit constructors', () => {
        const declarations = getConstructors(getClasses('some/path/file.ts'));

        editConstructors(declarations, () => ({
            scope: Scope.Protected,
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  protected constructor(){

  }
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
