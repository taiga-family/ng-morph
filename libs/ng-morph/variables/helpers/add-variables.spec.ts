import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, resetActiveProject, saveActiveProject, setActiveProject, } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addVariables } from './add-variables';
import { VariableDeclarationKind } from 'ts-morph';

describe('addVariables', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile('some/path/file.ts', ``);
  });

  it('should add variables', () => {
    addVariables('some/path/file.ts', {
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: 'name',
          initializer: `'value'`,
        },
      ],
    });

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`const name = 'value';
`);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
