import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getInterfaces,
    removeInterfaces,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('removeInterfaces', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'interface A {}');
    });

    it('should remove Interfaces', () => {
        const declarations = getInterfaces('some/path/file.ts');

        removeInterfaces(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe('');
    });

    afterEach(() => {
        resetActiveProject();
    });
});
