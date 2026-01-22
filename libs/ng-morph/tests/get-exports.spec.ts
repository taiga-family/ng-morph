import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getExports,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('getExports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
export { a } from 'b';
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
export { c } from 'd';
`,
        );
    });

    it('should find two exports', () => {
        const exports = getExports('some/path/**.ts');

        expect(exports.length).toBe(2);
    });

    it('should find one export', () => {
        const exports = getExports('some/path/file.ts');

        expect(exports.length).toBe(1);
    });

    it('should find one export by name', () => {
        const exports = getExports('some/path/**.ts', {moduleSpecifier: 'd'});

        expect(exports.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
