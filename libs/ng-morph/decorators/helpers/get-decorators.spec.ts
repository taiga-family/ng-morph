import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getAllDecorators, getDecorators } from './get-decorators';
import { getClasses } from 'ng-morph/classes';

describe('getDecorators', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
@Component({template: ''})
class A {
  constructor(value, @Optional() param){}

  @Required()
    method(@Pure() param){
  }

  @ContentChild(SomeComponent)
    property = 'someProperty'

  @AnotherDecorator(SomeComponent, ['string'])
    get getAccessor(){return null}

  @SetDecorator([1, 3])
    set setAccessor(value){}
}
    `,
    );

    createSourceFile(
      'some/path/one-more-file.ts',
      `
@Directive({})
class B {
  constructor(@Inject(TOKEN) value){}
}
    `,
    );
  });

  it('should find two decorators', () => {
    const declarations = getDecorators(getClasses('some/path/**.ts'));

    expect(declarations.length).toEqual(2);
  });

  it('should find one decorator', () => {
    const declarations = getDecorators(getClasses('some/path/file.ts'));

    expect(declarations.length).toEqual(1);
  });

  it('should find one decorator by name', () => {
    const declarations = getAllDecorators('some/path/**.ts');

    expect(declarations.length).toEqual(9);
  });

  it('should find one decorator by name', () => {
    const declarations = getAllDecorators('some/path/**.ts', {
      name: 'Inject',
    });

    expect(declarations.length).toEqual(1);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
