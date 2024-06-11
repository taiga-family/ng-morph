import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getEnums,
    resetActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('getEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
enum A { }
      `,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
enum B {
  Wow
}
      `,
        );
    });

    it('should find two enums', () => {
        const declarations = getEnums('some/path/**.ts');

        expect(declarations.length).toBe(2);
    });

    it('should find one enum', () => {
        const declarations = getEnums('some/path/file.ts');

        expect(declarations.length).toBe(1);
    });

    it('should find one enum by name', () => {
        const declarations = getEnums('some/path/**.ts', {
            name: 'B',
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
