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

import {getVariables} from './get-variables';
import {removeVariables} from './remove-variables';

describe('removeVariables', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', "const a = 'b'");
    });

    it('should remove variables', () => {
        const declarations = getVariables('some/path/file.ts');

        removeVariables(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe('');
    });

    afterEach(() => {
        resetActiveProject();
    });
});
