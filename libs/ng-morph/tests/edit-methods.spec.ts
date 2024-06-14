import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editMethods,
    getClasses,
    getMethods,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('editMethods', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  test(){}
}

A.prototype.test();
`,
        );
    });

    it('should edit methods', () => {
        const declarations = getMethods(getClasses('some/path/file.ts'));

        editMethods(declarations, ({isAsync}) => ({
            name: 'b',
            isAsync: !isAsync,
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  async b(){}
}

A.prototype.b();
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
