import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addMethods,
    createProject,
    createSourceFile,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addMethods', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {}
class B {}
`,
        );
    });

    it('should add methods', () => {
        addMethods(getClasses('some/path/file.ts', {name: 'B'}), {
            name: 'test',
            statements: 'return 0;',
            returnType: 'number',
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {}
class B {
    test(): number {
        return 0;
    }
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
