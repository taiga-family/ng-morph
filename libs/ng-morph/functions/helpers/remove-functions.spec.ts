import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { removeFunctions } from './remove-functions';
import { getFunctions } from './get-functions';

describe('removeFunctions', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
function a(){
  return 'a'
}

export function b() {
    return 'b'
}
`,
    );
  });

  it('should remove the `b` function', () => {
    removeFunctions(getFunctions('some/**/**.ts', { name: 'b' }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
function a(){
  return 'a'
}
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
