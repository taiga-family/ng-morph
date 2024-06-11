import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getTypeAliases,
    removeTypeAliases,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('removeTypeAliases', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'type A = string;');
    });

    it('should remove type aliases', () => {
        const declarations = getTypeAliases('some/path/file.ts');

        removeTypeAliases(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe('');
    });

    afterEach(() => {
        resetActiveProject();
    });
});
