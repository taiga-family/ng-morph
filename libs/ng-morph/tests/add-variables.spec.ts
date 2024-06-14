import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {VariableDeclarationKind} from 'ts-morph';

import {addVariables} from '../src/variables/add-variables';

describe('addVariables', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', '');
    });

    it('should add variables', () => {
        addVariables('some/path/file.ts', {
            declarationKind: VariableDeclarationKind.Const,
            declarations: [
                {
                    name: 'name',
                    initializer: "'value'",
                },
            ],
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`const name = 'value';
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
