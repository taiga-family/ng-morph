import {dasherize} from '@angular-devkit/core/src/utils/strings';
import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('renameSourceFilePaths', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('testFile.ts', "import {a} from './some/testFile'");
        createSourceFile('some/testFile.ts', "export const a = 'b'");
        createSourceFile('some/DeepPath/testFile.ts', '');
        saveActiveProject();

        moveSourceFilePaths(getSourceFiles('some/**/*.ts'), dasherize);
        saveActiveProject();
    });

    it('should change a file content', () => {
        expect(host.readContent('testFile.ts')).toBe(
            "import {a} from './some/test-file'",
        );
    });

    it('should exist renamed files', () => {
        expect(host.files).toEqual([
            '/testFile.ts',
            '/some/test-file.ts',
            '/some/deep-path/test-file.ts',
        ]);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
