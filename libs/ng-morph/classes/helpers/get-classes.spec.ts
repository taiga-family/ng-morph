import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { getClasses } from './get-classes';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';

describe('getClasses', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A { }
`,
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
class B { }
`,
    );
  });

  it('should find two classes', () => {
    const exports = getClasses('some/path/**.ts');

    expect(exports.length).toEqual(2);
  });

  it('should find one class', () => {
    const exports = getClasses('some/path/file.ts');

    expect(exports.length).toEqual(1);
  });

  it('should find one export by class name', () => {
    const exports = getClasses('some/path/**.ts', {
      name: 'B',
    });

    expect(exports.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
