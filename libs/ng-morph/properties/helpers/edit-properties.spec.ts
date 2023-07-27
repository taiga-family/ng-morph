import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getProperties } from './get-properties';
import { editProperties } from './edit-properties';
import { getClasses } from 'ng-morph/classes';

describe('editProperties', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  b = 0;
}
`
    );
  });

  it('should edit properties', () => {
    const declarations = getProperties(getClasses('some/path/file.ts'));

    editProperties(declarations, () => ({
      name: 'b',
      initializer: `'s'`,
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {
  b = 's';
}
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
