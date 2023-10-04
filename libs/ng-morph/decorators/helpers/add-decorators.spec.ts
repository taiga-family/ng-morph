import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  resetActiveProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addDecorators } from './add-decorators';
import { getClasses } from 'ng-morph/classes';
import { getMethods } from 'ng-morph/methods';
import { getProperties } from 'ng-morph/properties';
import { getAccessors } from 'ng-morph/accessors';
import { getParams } from 'ng-morph/params';
import { getConstructors } from 'ng-morph/constructors';

describe('addDecorators', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));

    createSourceFile(
      'some/path/file.ts',
      `
class A {
  constructor(value, param){}

  method(param){
  }

  property = 'someProperty'

  get getAccessor(){return null}

  set setAccessor(value){}
}
    `,
    );
  });

  it('should add decorators', () => {
    const classes = getClasses('some/path/file.ts');
    const methods = getMethods(classes, { name: 'method' });
    const constructorParams = getParams(getConstructors(classes), {
      name: 'param',
    });
    const methodParams = getParams(methods);
    const properties = getProperties(classes, { name: 'property' });
    const getAccessorss = getAccessors(classes, { name: 'getAccessor' });
    const setAccessors = getAccessors(classes, { name: 'setAccessor' });

    addDecorators(classes, {
      name: 'Component',
      arguments: [`{template: ''}`],
    });

    addDecorators(methods, {
      name: 'Required',
      arguments: [],
    });

    addDecorators(constructorParams, {
      name: 'Optional',
      arguments: [],
    });

    addDecorators(methodParams, {
      name: 'Pure',
      arguments: [],
    });

    addDecorators(properties, {
      name: 'ContentChild',
      arguments: ['SomeComponent'],
    });

    addDecorators(getAccessorss, {
      name: 'AnotherDecorator',
      arguments: ['SomeComponent', `['string']`],
    });

    addDecorators(setAccessors, {
      name: 'SetDecorator',
      arguments: [`[1, 3]`],
    });

    saveActiveProject();

    expect(host.readContent('some/path/file.ts')).toEqual(`
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
    `);
  });

  afterEach(() => {
    resetActiveProject();
  });
});
