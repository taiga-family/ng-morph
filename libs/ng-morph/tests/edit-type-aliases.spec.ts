import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editTypeAliases,
    getTypeAliases,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('editTypeAliases', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'type A = string[]; let a: A;');
    });

    it('should edit type aliases', () => {
        const declarations = getTypeAliases('some/path/file.ts');

        editTypeAliases(declarations, () => ({
            name: 'B',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(
            'type B = string[]; let a: B;',
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});
