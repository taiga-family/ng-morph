import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addClasses,
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('addClasses', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('some/path/file.ts', '');
    });

    it('should add classes', () => {
        addClasses('some/path/file.ts', {
            name: 'A',
            isDefaultExport: true,
            methods: [
                {
                    name: 'method',
                    isStatic: true,
                    statements: 'return 0',
                    returnType: 'number',
                },
            ],
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`export default class A {
    static method(): number {
        return 0
    }
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
