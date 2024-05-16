import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {getClasses} from 'ng-morph/classes';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {getDecorators} from './get-decorators';
import {removeDecorators} from './remove-decorators';

describe('removeDecorators', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
@Decorator()
class A {}
    `,
        );
    });

    it('should remove decorators', () => {
        const declarations = getDecorators(getClasses('some/path/file.ts'));

        removeDecorators(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
