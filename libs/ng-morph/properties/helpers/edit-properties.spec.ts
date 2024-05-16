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

import {editProperties} from './edit-properties';
import {getProperties} from './get-properties';

describe('editProperties', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  b = 0;
}
`,
        );
    });

    it('should edit properties', () => {
        const declarations = getProperties(getClasses('some/path/file.ts'));

        editProperties(declarations, () => ({
            name: 'b',
            initializer: "'s'",
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  b = 's';
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
