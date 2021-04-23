import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getParams } from './get-params';
import { removeParams } from './remove-params';
import { getConstructors } from 'ng-morph/constructors';
import { getClasses } from 'ng-morph/classes';

describe('removeParams', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  constructor(value1, value2 = 'defaultValue', value3){}
}
    `
    );
  });

  it('should remove params', () => {
    const declarations = getParams(
      getConstructors(getClasses('some/path/file.ts')),
      { initializer: `'defaultValue'` }
    );

    removeParams(declarations);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {
  constructor(value1, value3){}
}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
