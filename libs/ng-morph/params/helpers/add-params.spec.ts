import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addParams} from './add-params';
import {getMethods} from 'ng-morph/methods';
import {getClasses} from 'ng-morph/classes';

describe('addParams', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class B {
  add(){}
}
    `,
        );
    });

    it('should add params', () => {
        addParams(getMethods(getClasses('some/path/file.ts'), {name: 'add'}), [
            {
                name: 'param',
                type: 'number',
                decorators: [{name: 'Pure', arguments: []}],
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toEqual(`
class B {
  add(@Pure() param: number){}
}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
