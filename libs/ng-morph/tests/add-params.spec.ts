import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addParams,
    createProject,
    createSourceFile,
    getClasses,
    getMethods,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addParams', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {
  add(){}
}
    `,
        );
    });

    it('should add params', () => {
        addParams(getMethods(getClasses('some/path/file.ts'), {name: 'add'}), [
            {
                name: 'param',
                type: 'number',
                decorators: [{name: 'Pure', arguments: []}],
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
  add(@Pure() param: number){}
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
