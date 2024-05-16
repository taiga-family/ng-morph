import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {StructureKind} from 'ts-morph';

import {createSourceFile} from '../../source-file';
import {getImports} from './get-imports';

describe('getImports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
import { a } from 'b';
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
import { c } from 'd';
import { a } from 'd';
import b from 'd';
`,
        );
    });

    it('should find two imports', () => {
        const imports = getImports('some/path/**.ts');

        expect(imports.length).toBe(4);
    });

    it('should find one import', () => {
        const imports = getImports('some/path/file.ts');

        expect(imports.length).toBe(1);
    });

    it('should find one import by module name', () => {
        const imports = getImports('some/path/**.ts', {
            moduleSpecifier: 'd',
            namedImports: 'c',
        });

        expect(imports.map(i => i.getStructure())).toEqual([
            {
                isTypeOnly: false,
                kind: StructureKind.ImportDeclaration,
                moduleSpecifier: 'd',
                namedImports: [
                    {
                        isTypeOnly: false,
                        kind: StructureKind.ImportSpecifier,
                        name: 'c',
                    },
                ],
            },
        ]);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
