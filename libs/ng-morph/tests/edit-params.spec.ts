import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editParams,
    getClasses,
    getConstructors,
    getParams,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {Scope} from 'ts-morph';

describe('editParams', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {
  constructor(param1: number, param2: string){}
}
    `,
        );
    });

    it('should edit params', () => {
        const declarations = getParams(getConstructors(getClasses('some/path/file.ts')), {
            name: 'param2',
        });

        editParams(declarations, () => ({
            scope: Scope.Private,
            name: 'anotherParam',
            type: 'number',
            initializer: 'Math.PI',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
  constructor(param1: number, private anotherParam: number = Math.PI){}
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
