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
import {StructureKind} from 'ts-morph';

import {addAccessors} from './add-accessors';

describe('addAccessors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {}
    `,
        );
    });

    it('should add accessors', () => {
        addAccessors(getClasses('some/path/file.ts'), [
            {
                name: 'setter',
                kind: StructureKind.SetAccessor,
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
    set setter() {
    }
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
