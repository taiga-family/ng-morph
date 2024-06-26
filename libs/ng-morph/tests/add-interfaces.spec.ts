import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addInterfaces,
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addInterfaces', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', '');
    });

    it('should add Interfaces', () => {
        addInterfaces('some/path/file.ts', {
            name: 'A',
            properties: [{name: 's', type: 'string'}],
            methods: [{name: 'method', returnType: 'number'}],
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`interface A {
    s: string;
    method(): number;
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
