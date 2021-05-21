import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addClasses } from './add-classes';

describe('addClasses', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('some/path/file.ts', ``);
  });

  it('should add classes', () => {
    addClasses('some/path/file.ts', {
      name: 'A',
      isDefaultExport: true,
      methods: [
        {
          name: 'method',
          isStatic: true,
          statements: 'return 0',
          returnType: 'number',
        },
      ]
    });

    saveActiveProject();

    expect(host.readContent('some/path/file.ts'))
      .toEqual(`export default class A {
    static method(): number {
        return 0
    }
}
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
