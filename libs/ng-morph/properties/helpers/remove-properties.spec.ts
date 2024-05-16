import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {getClasses} from 'ng-morph/classes';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {getProperties} from './get-properties';
import {removeProperties} from './remove-properties';

describe('removeMethods', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {
  test = 'test'
}

class A {
  prop = 1;
}
`,
        );
    });

    it('should remove methods', () => {
        const declarations = getProperties(getClasses('some/path/file.ts', {name: 'B'}), {
            name: 'test',
        });

        removeProperties(declarations);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
class B {
}

class A {
  prop = 1;
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
