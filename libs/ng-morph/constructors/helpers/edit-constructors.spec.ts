import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {getClasses} from 'ng-morph/classes';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {Scope} from 'ts-morph';

import {editConstructors} from './edit-constructors';
import {getConstructors} from './get-constructors';

describe('editConstructors', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  constructor(){

  }
}
    `,
        );
    });

    it('should edit constructors', () => {
        const declarations = getConstructors(getClasses('some/path/file.ts'));

        editConstructors(declarations, () => ({
            scope: Scope.Protected,
        }));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class A {
  protected constructor(){

  }
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
