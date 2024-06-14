import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addEnums,
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
console.log('Some log');
`,
        );
    });

    it('should add enums', () => {
        addEnums('some/path/file.ts', [
            {
                name: 'Enum',
                isConst: true,
                members: [{name: 'First'}, {name: 'second'}],
            },
            {
                name: 'EmptyEnum',
                isExported: true,
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
console.log('Some log');
const enum Enum {
    First,
    second
}

export enum EmptyEnum {
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
