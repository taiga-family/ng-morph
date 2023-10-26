import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addFunctions} from './add-functions';

describe('addFunctions', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
function a(){
  return 'a'
}
`,
        );
    });

    it('should add a function', () => {
        addFunctions('some/**/**.ts', {
            isExported: true,
            name: 'b',
            statements: `return 'b'`,
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toEqual(`
function a(){
  return 'a'
}
export function b() {
    return 'b'
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
