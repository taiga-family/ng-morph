import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getProperties } from './get-properties';
import { getClasses } from 'ng-morph/classes';

describe('getProperties', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  b = 1;
}
`
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
class B {
  static d = 's';

  static hello2 = 'hello';
}
`
    );
  });

  it('should find two properties', () => {
    const declarations = getProperties(getClasses('some/path/**.ts'));

    expect(declarations.length).toEqual(3);
  });

  it('should find one property', () => {
    const declarations = getProperties(getClasses('some/path/file.ts'));

    expect(declarations.length).toEqual(1);
  });

  it('should find one property by name pattern **', () => {
    const declarations = getProperties(getClasses('some/path/**.ts'), {
      name: 'd',
      isStatic: true,
    });

    expect(declarations.length).toEqual(1);
  });

  it('should find one property by blob pattern **/*', () => {
    const declarations = getProperties(getClasses('**/*.ts'), {
      name: 'hello*',
      isStatic: true,
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
