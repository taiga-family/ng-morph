import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getClasses,
    resetActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('getClasses', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A { }
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
class B { }
`,
        );
    });

    it('should find two classes', () => {
        const exports = getClasses('some/path/**.ts');

        expect(exports.length).toBe(2);
    });

    it('should find one class', () => {
        const exports = getClasses('some/path/file.ts');

        expect(exports.length).toBe(1);
    });

    it('should find one export by class name', () => {
        const exports = getClasses('some/path/**.ts', {
            name: 'B',
        });

        expect(exports.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
