import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createSourceFile, getSourceFiles } from 'ng-morph/source-file';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';

describe('getSourceFiles', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('test.ts', '');
    createSourceFile('some/test.ts', '');
    createSourceFile('some/path/test.ts', '');
  });

  it('should find all source files', () => {
    const sourceFiles = getSourceFiles('some/**/*.ts');

    expect(sourceFiles.length).toEqual(2);
  });

  it('should find three source files', () => {
    const sourceFiles = getSourceFiles('**/*.ts');

    expect(sourceFiles.length).toEqual(3);
  });

  it('should find one source file', () => {
    const sourceFiles = getSourceFiles('some/test.ts');

    expect(sourceFiles.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
