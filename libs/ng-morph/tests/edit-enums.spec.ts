import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editEnums,
    getEnums,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('editEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
enum Test {First}

let a: Test;
const b = Test.First;
`,
        );
    });

    it('should edit enums', () => {
        const declarations = getEnums('some/path/file.ts');

        editEnums(declarations, () => ({
            name: 'Name',
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
enum Name {
    First
}

let a: Name;
const b = Name.First;
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
