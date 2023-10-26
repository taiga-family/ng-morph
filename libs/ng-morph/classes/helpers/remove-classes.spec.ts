import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {getClasses} from './get-classes';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {removeClasses} from './remove-classes';

describe('removeClasses', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
class A {}

const a: A;
`,
        );
    });

    it('should remove classes', () => {
        removeClasses(getClasses('**/**', {name: 'A'}));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toEqual(`
const a: A;
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
