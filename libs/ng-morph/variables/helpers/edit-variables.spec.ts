import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {VariableDeclarationKind} from 'ts-morph';

import {editVariables} from './edit-variables';
import {getVariables} from './get-variables';

describe('editVariables', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', "const a = 's'");
    });

    it('should edit variables', () => {
        const declarations = getVariables('some/path/file.ts');

        editVariables(declarations, () => ({
            declarationKind: VariableDeclarationKind.Let,
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe("let a = 's'");
    });

    afterEach(() => {
        resetActiveProject();
    });
});
