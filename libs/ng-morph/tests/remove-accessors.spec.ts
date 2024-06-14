import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getAccessors,
    getClasses,
    removeAccessors,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('removeAccessors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  get getter(){}

  set setter(value){}
}
    `,
        );
    });

    it('should remove accessors', () => {
        const declarations = getAccessors(getClasses('some/path/file.ts'));

        removeAccessors(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
