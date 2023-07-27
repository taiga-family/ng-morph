import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getAccessors } from './get-accessors';
import { removeAccessors } from './remove-accessors';
import { getClasses } from 'ng-morph/classes';

describe('removeAccessors', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  get getter(){}

  set setter(value){}
}
    `
    );
  });

  it('should remove accessors', () => {
    const declarations = getAccessors(getClasses('some/path/file.ts'));

    removeAccessors(declarations);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {
}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
