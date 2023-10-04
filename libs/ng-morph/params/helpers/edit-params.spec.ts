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
import { editParams } from './edit-params';
import { Scope } from 'ts-morph';
import { getConstructors } from 'ng-morph/constructors';
import { getClasses } from 'ng-morph/classes';

describe('editParams', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class B {
  constructor(param1: number, param2: string){}
}
    `,
    );
  });

  it('should edit params', () => {
    const declarations = getParams(
      getConstructors(getClasses('some/path/file.ts')),
      { name: 'param2' },
    );

    editParams(declarations, () => ({
      scope: Scope.Private,
      name: 'anotherParam',
      type: 'number',
      initializer: 'Math.PI',
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class B {
  constructor(param1: number, private anotherParam: number = Math.PI){}
}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
