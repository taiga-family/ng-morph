import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {getVariables} from './get-variables';
import {VariableDeclarationKind} from 'ts-morph';

describe('getVariables', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', `const a;`);

        createSourceFile('some/path/one-more-file.ts', `var b = {};`);
    });

    it('should find two variables', () => {
        const declarations = getVariables('some/path/**.ts');

        expect(declarations.length).toEqual(2);
    });

    it('should find one variable', () => {
        const declarations = getVariables('some/path/file.ts');

        expect(declarations.length).toEqual(1);
    });

    it('should find one variable by variable kind', () => {
        const declarations = getVariables('some/path/**.ts', {
            declarationKind: VariableDeclarationKind.Var,
        });

        expect(declarations.length).toEqual(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
