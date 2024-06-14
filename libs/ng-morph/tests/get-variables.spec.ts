import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getVariables,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';
import {VariableDeclarationKind} from 'ts-morph';

describe('getVariables', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'const a;');

        createSourceFile('some/path/one-more-file.ts', 'var b = {};');
    });

    it('should find two variables', () => {
        const declarations = getVariables('some/path/**.ts');

        expect(declarations.length).toBe(2);
    });

    it('should find one variable', () => {
        const declarations = getVariables('some/path/file.ts');

        expect(declarations.length).toBe(1);
    });

    it('should find one variable by variable kind', () => {
        const declarations = getVariables('some/path/**.ts', {
            declarationKind: VariableDeclarationKind.Var,
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
