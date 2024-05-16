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

import {editInterfaces} from './edit-interfaces';
import {getInterfaces} from './get-interfaces';

describe('editInterfaces', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
interface A {}

const a: A;
`,
        );
    });

    it('should edit Interfaces', () => {
        const declarations = getInterfaces('some/path/file.ts');

        editInterfaces(declarations, () => ({
            name: 'B',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
interface B {}

const a: B;
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
