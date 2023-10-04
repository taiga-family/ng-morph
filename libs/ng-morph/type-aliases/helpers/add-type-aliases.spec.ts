import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addTypeAliases } from './add-type-aliases';

describe('addTypeAliases', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('some/path/file.ts', ``);
  });

  it('should add type aliases', () => {
    addTypeAliases('some/path/file.ts', {
      name: 'A',
      typeParameters: ['T'],
      type: 'T[]',
    });

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`type A<T> = T[];
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
