import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getEnums,
    removeEnums,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('removeEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'enum Test { }');
    });

    it('should remove enums', () => {
        const declarations = getEnums('some/path/file.ts', {name: 'Test'});

        removeEnums(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe('');
    });

    afterEach(() => {
        resetActiveProject();
    });
});
