import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editClasses,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('editClasses', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {}

const a: A;
`,
        );
    });

    it('should edit classes', () => {
        const classes = getClasses('some/path/file.ts');

        editClasses(classes, () => ({
            isExported: true,
            name: 'B',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
export class B {}

const a: B;
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
