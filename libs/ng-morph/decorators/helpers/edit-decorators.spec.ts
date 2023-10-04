import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getDecorators } from './get-decorators';
import { editDecorators } from './edit-decorators';
import { getClasses } from 'ng-morph/classes';

describe('editDecorators', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
@Component({
  selector: 'a'
})
class A{

}
    `,
    );
  });

  it('should edit decorators', () => {
    const declarations = getDecorators(getClasses('some/path/file.ts'));

    editDecorators(declarations, () => ({
      name: 'Directive',
    }));

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
@Directive({
      selector: 'a'
    })
class A{

}
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
