import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getAccessors,
    getClasses,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('getAccessors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  get getter(){}
}
    `,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
class B {
  set setter(value){}
}
    `,
        );
    });

    it('should find two accessors', () => {
        const declarations = getAccessors(getClasses('some/path/**.ts'));

        expect(declarations.length).toBe(2);
    });

    it('should find one accessor', () => {
        const declarations = getAccessors(getClasses('some/path/file.ts'));

        expect(declarations.length).toBe(1);
    });

    it('should find one accessor by name', () => {
        const declarations = getAccessors(getClasses('some/path/**.ts'), {
            name: 'setter',
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
