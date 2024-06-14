import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    getConstructors,
    getParams,
    removeParams,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('removeParams', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  constructor(value1, value2 = 'defaultValue', value3){}
}
    `,
        );
    });

    it('should remove params', () => {
        const declarations = getParams(getConstructors(getClasses('some/path/file.ts')), {
            initializer: "'defaultValue'",
        });

        removeParams(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  constructor(value1, value3){}
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
