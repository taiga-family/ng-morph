import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addImports } from './add-imports';

describe('addImports', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
console.log(a);
`
    );
  });

  it('should add imports', () => {
    addImports('some/path/file.ts', [
      {
        namedImports: ['a'],
        moduleSpecifier: 'b',
      },
      {
        namespaceImport: 'c',
        moduleSpecifier: 'd',
      },
      {
        defaultImport: 'c',
        moduleSpecifier: 'd',
      },
      {
        namedImports: ['e'],
        moduleSpecifier: 'f',
        isTypeOnly: true,
      },
    ]);

    saveActiveProject();

    expect(host.readContent('some/path/file.ts'))
      .toEqual(`import { a } from "b";
import * as c from "d";
import c from "d";
import type { e } from "f";

console.log(a);
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
