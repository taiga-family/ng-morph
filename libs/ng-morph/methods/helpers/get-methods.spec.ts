import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getMethods } from './get-methods';
import { getClasses } from 'ng-morph/classes';

describe('getMethods', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  b(){}
}
`,
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
class B {
  static d(){}
}
`,
    );
  });

  it('should find two methods', () => {
    const declarations = getMethods(getClasses('some/path/**.ts'));

    expect(declarations.length).toEqual(2);
  });

  it('should find one method', () => {
    const declarations = getMethods(getClasses('some/path/file.ts'));

    expect(declarations.length).toEqual(1);
  });

  it('should find one method by name', () => {
    const declarations = getMethods(getClasses('some/path/**.ts'), {
      name: 'd',
      isStatic: true,
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
