import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getInterfaces } from './get-interfaces';
import { removeInterfaces } from './remove-interfaces';

describe('removeInterfaces', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('some/path/file.ts', `interface A {}`);
  });

  it('should remove Interfaces', () => {
    const declarations = getInterfaces('some/path/file.ts');

    removeInterfaces(declarations);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(``);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
