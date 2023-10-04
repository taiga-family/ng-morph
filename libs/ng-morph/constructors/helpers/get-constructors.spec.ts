import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getConstructors } from './get-constructors';
import { getClasses } from 'ng-morph/classes';
import { Scope } from 'ts-morph';

describe('getConstructors', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  constructor(a: string | number){

  }
}
    `,
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
class B {
  protected constructor(a: string | number){

  }
}
    `,
    );
  });

  it('should find two constructors', () => {
    const declarations = getConstructors(getClasses('some/path/**.ts'));

    expect(declarations.length).toEqual(2);
  });

  it('should find one constructor', () => {
    const declarations = getConstructors(getClasses('some/path/file.ts'));

    expect(declarations.length).toEqual(1);
  });

  it('should find one constructor by name', () => {
    const declarations = getConstructors(getClasses('some/path/**.ts'), {
      scope: Scope.Protected,
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
