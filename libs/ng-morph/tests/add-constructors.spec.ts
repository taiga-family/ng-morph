import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addConstructors,
    createProject,
    createSourceFile,
    getClasses,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {Scope} from 'ts-morph';

describe('addConstructors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {

}
    `,
        );
    });

    it('should add constructors', () => {
        addConstructors(getClasses('some/path/file.ts', {name: 'B'}), {
            parameters: [
                {
                    decorators: [{name: 'Inject', arguments: ['SomeType']}],
                    name: 'param',
                    type: 'SomeType',
                },
            ],
            scope: Scope.Protected,
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
    protected constructor(@Inject(SomeType) param: SomeType) {
    }
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
