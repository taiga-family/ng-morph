import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {getExports} from './get-exports';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

describe('getExports', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
export { a } from 'b';
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
export { c } from 'd';
`,
        );
    });

    it('should find two exports', () => {
        const exports = getExports('some/path/**.ts');

        expect(exports.length).toEqual(2);
    });

    it('should find one export', () => {
        const exports = getExports('some/path/file.ts');

        expect(exports.length).toEqual(1);
    });

    it('should find one export by name', () => {
        const exports = getExports('some/path/**.ts', {
            moduleSpecifier: 'd',
        });

        expect(exports.length).toEqual(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
