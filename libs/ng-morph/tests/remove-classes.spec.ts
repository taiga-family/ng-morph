import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    removeClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('removeClasses', () => {
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

    it('should remove classes', () => {
        removeClasses(getClasses('**/**', {name: 'A'}));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
const a: A;
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
