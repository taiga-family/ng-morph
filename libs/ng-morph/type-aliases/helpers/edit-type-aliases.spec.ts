import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {editTypeAliases} from './edit-type-aliases';
import {getTypeAliases} from './get-type-aliases';

describe('editTypeAliases', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'type A = string[]; let a: A;');
    });

    it('should edit type aliases', () => {
        const declarations = getTypeAliases('some/path/file.ts');

        editTypeAliases(declarations, () => ({
            name: 'B',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(
            'type B = string[]; let a: B;',
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});
