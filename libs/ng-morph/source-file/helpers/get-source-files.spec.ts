import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile, getSourceFiles} from 'ng-morph/source-file';

describe('getSourceFiles', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('test.ts', '');
        createSourceFile('some/test.ts', '');
        createSourceFile('some/path/test.ts', '');
    });

    it('should find all source files', () => {
        const sourceFiles = getSourceFiles('some/**/*.ts');

        expect(sourceFiles.length).toBe(2);
    });

    it('should find three source files', () => {
        const sourceFiles = getSourceFiles('**/*.ts');

        expect(sourceFiles.length).toBe(3);
    });

    it('should find one source file', () => {
        const sourceFiles = getSourceFiles('some/test.ts');

        expect(sourceFiles.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
