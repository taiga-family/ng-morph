import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    getMethods,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('getMethods', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  b(){}
}
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
class B {
  static d(){}
}
`,
        );
    });

    it('should find two methods', () => {
        const declarations = getMethods(getClasses('some/path/**.ts'));

        expect(declarations.length).toBe(2);
    });

    it('should find one method', () => {
        const declarations = getMethods(getClasses('some/path/file.ts'));

        expect(declarations.length).toBe(1);
    });

    it('should find one method by name', () => {
        const declarations = getMethods(getClasses('some/path/**.ts'), {
            name: 'd',
            isStatic: true,
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
