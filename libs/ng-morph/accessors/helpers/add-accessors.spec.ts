import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addAccessors } from './add-accessors';
import { getClasses } from 'ng-morph/classes';
import { StructureKind } from 'ts-morph';

describe('addAccessors', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {}
    `
    );
  });

  it('should add accessors', () => {
    addAccessors(getClasses('some/path/file.ts'), [
      {
        name: 'setter',
        kind: StructureKind.SetAccessor,
      },
    ]);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class A {
    set setter() {
    }
}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
