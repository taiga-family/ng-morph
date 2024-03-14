import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {createProject, resetActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {getInterfaces} from './get-interfaces';

describe('getInterfaces', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
interface A {}
`,
        );

        createSourceFile(
            'some/path/one-more-file.ts',
            `
interface B {}
`,
        );
    });

    it('should find two Interfaces', () => {
        const declarations = getInterfaces('some/path/**.ts');

        expect(declarations.length).toBe(2);
    });

    it('should find one interface', () => {
        const declarations = getInterfaces('some/path/file.ts');

        expect(declarations.length).toBe(1);
    });

    it('should find one interface by name', () => {
        const declarations = getInterfaces('some/path/**.ts', {
            name: 'B',
        });

        expect(declarations.length).toBe(1);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
