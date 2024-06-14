import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addProperties,
    createProject,
    createSourceFile,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addProperties', () => {
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

    it('should add properties', () => {
        addProperties(getClasses('some/path/file.ts', {name: 'B'}), {
            name: 'test',
            initializer: '3',
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {}
class B {
    test = 3;
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
