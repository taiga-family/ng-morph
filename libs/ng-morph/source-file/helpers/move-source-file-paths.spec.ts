import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { moveSourceFilePaths } from './move-source-file-paths';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile, getSourceFiles } from 'ng-morph/source-file';

describe('renameSourceFilePaths', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('testFile.ts', "import {a} from './some/testFile'");
    createSourceFile('some/testFile.ts', "export const a = 'b'");
    createSourceFile('some/DeepPath/testFile.ts', '');
    saveActiveProject();

    moveSourceFilePaths(getSourceFiles('some/**/*.ts'), dasherize);
    saveActiveProject();
  });

  it('should change a file content', () => {
    expect(host.readContent('testFile.ts')).toEqual(
      "import {a} from './some/test-file'"
    );
  });

  it('should exist renamed files', () => {
    expect(host.files).toEqual([
      '/testFile.ts',
      '/some/test-file.ts',
      '/some/deep-path/test-file.ts',
    ]);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
