import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {getClasses} from 'ng-morph/classes';
import {getConstructors} from 'ng-morph/constructors';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {getParams} from './get-params';

describe('getParams', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {
  constructor(value){}
}
    `,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
class B {
  constructor(@Inject(SOME_TOKEN) name: number = Math.PI){}
}
    `,
        );
    });

    it('should find two params', () => {
        const declarations = getParams(getConstructors(getClasses('some/path/**.ts')));

        expect(declarations.length).toBe(2);
    });

    it('should find one param', () => {
        const declarations = getParams(getConstructors(getClasses('some/path/file.ts')));

        expect(declarations.length).toBe(1);
    });

    it('should find one param by name', () => {
        const declarations = getParams(getConstructors(getClasses('some/path/**.ts')), {
            initializer: 'Math.PI',
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
