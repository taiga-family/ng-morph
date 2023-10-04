import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getFunctions } from './get-functions';
import { Node } from 'ts-morph';

describe('getFunctions', () => {
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
`,
    );
  });

  it('should find all functions', () => {
    const functions = getFunctions('some/**/**.ts');

    expect(functions.map(Node.isFunctionDeclaration)).toEqual([true]);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
