import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    getMethods,
    removeMethods,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('removeMethods', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {
  test(){}
}

class A {
  test(){}
}
`,
        );
    });

    it('should remove methods', () => {
        const declarations = getMethods(getClasses('some/path/file.ts', {name: 'A'}), {
            name: 'test',
        });

        removeMethods(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
  test(){}
}

class A {
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
