import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addAccessors,
    createProject,
    createSourceFile,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';
import {StructureKind} from 'ts-morph';

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
