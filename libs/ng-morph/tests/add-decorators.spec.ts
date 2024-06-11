import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addDecorators,
    createProject,
    createSourceFile,
    getAccessors,
    getClasses,
    getConstructors,
    getMethods,
    getParams,
    getProperties,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

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
        const methods = getMethods(classes, {name: 'method'});
        const constructorParams = getParams(getConstructors(classes), {
            name: 'param',
        });
        const methodParams = getParams(methods);
        const properties = getProperties(classes, {name: 'property'});
        const getAccessorss = getAccessors(classes, {name: 'getAccessor'});
        const setAccessors = getAccessors(classes, {name: 'setAccessor'});

        addDecorators(classes, {
            name: 'Component',
            arguments: ["{template: ''}"],
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
            arguments: ['SomeComponent', "['string']"],
        });

        addDecorators(setAccessors, {
            name: 'SetDecorator',
            arguments: ['[1, 3]'],
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
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
