import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { getImports } from './get-imports';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { removeImports } from './remove-imports';

describe('removeImports', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
import { a } from 'b';

console.log(a);
`
    );
  });

  it('should remove imports', () => {
    const imports = getImports('some/path/file.ts');

    removeImports(imports);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
console.log(a);
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
