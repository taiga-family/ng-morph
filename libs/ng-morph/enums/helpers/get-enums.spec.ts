import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getEnums } from './get-enums';

describe('getEnums', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
enum A { }
      `
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
enum B {
  Wow
}
      `
    );
  });

  it('should find two enums', () => {
    const declarations = getEnums('some/path/**.ts');

    expect(declarations.length).toEqual(2);
  });

  it('should find one enum', () => {
    const declarations = getEnums('some/path/file.ts');

    expect(declarations.length).toEqual(1);
  });

  it('should find one enum by name', () => {
    const declarations = getEnums('some/path/**.ts', {
      name: 'B',
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
