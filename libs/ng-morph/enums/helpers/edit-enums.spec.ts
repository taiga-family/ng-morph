import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getEnums } from './get-enums';
import { editEnums } from './edit-enums';

describe('editEnums', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
enum Test {First}

let a: Test;
const b = Test.First;
`
    );
  });

  it('should edit enums', () => {
    const declarations = getEnums('some/path/file.ts');

    editEnums(declarations, () => ({
      name: 'Name',
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
enum Name {
    First
}

let a: Name;
const b = Name.First;
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
