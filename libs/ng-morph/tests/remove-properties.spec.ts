import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    getProperties,
    removeProperties,
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
  test = 'test'
}

class A {
  prop = 1;
}
`,
        );
    });

    it('should remove methods', () => {
        const declarations = getProperties(getClasses('some/path/file.ts', {name: 'B'}), {
            name: 'test',
        });

        removeProperties(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
}

class A {
  prop = 1;
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
