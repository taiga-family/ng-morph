import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getConstructors } from './get-constructors';
import { removeConstructors } from './remove-constructors';
import { getClasses } from 'ng-morph/classes';

describe('removeConstructors', () => {
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

  it('should remove constructors', () => {
    const declarations = getConstructors(getClasses('some/path/file.ts'));

    removeConstructors(declarations);

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
