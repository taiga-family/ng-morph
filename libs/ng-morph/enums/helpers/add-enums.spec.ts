import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addEnums} from './add-enums';

describe('addEnums', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
console.log('Some log');
`,
        );
    });

    it('should add enums', () => {
        addEnums('some/path/file.ts', [
            {
                name: 'Enum',
                isConst: true,
                members: [{name: 'First'}, {name: 'second'}],
            },
            {
                name: 'EmptyEnum',
                isExported: true,
            },
        ]);

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toEqual(`
console.log('Some log');
const enum Enum {
    First,
    second
}

export enum EmptyEnum {
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
