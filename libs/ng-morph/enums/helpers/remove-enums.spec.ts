import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {getEnums} from './get-enums';
import {removeEnums} from './remove-enums';

describe('removeEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', 'enum Test { }');
    });

    it('should remove enums', () => {
        const declarations = getEnums('some/path/file.ts', {name: 'Test'});

        removeEnums(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe('');
    });

    afterEach(() => {
        resetActiveProject();
    });
});
