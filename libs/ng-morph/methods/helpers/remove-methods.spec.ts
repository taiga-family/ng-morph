import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getMethods } from './get-methods';
import { removeMethods } from './remove-methods';
import { getClasses } from 'ng-morph/classes';

describe('removeMethods', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class B {
  test(){}
}

class A {
  test(){}
}
`,
    );
  });

  it('should remove methods', () => {
    const declarations = getMethods(
      getClasses('some/path/file.ts', { name: 'A' }),
      { name: 'test' },
    );

    removeMethods(declarations);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
class B {
  test(){}
}

class A {
}
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
