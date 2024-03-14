import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addTypeAliases} from 'ng-morph/type-aliases';

describe('addTypeAliases', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', '');
    });

    it('should add type aliases', () => {
        addTypeAliases('some/path/file.ts', {
            name: 'A',
            typeParameters: ['T'],
            type: 'T[]',
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`type A<T> = T[];
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
