import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getAccessors } from './get-accessors';
import { editAccessors } from './edit-accessors';
import { getClasses } from 'ng-morph/classes';

describe('editAccessors', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  set setter(value){

  }
}
    `
    );
  });

  it('should edit accessors', () => {
    const declarations = getAccessors(getClasses('some/path/file.ts'));

    editAccessors(declarations, () => ({
      name: 'anotherName',
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {
  set anotherName(value){

  }
}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
