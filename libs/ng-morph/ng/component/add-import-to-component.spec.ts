import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {getClasses} from 'ng-morph/classes';
import {addImportToComponent} from './add-import-to-component';

describe('addProviderToComponent', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    describe('No providers property', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { Component } from '@angular/core';

@Component({})
export class SomeComponent {

}`,
            );
        });

        it('should create the providers property', () => {
            addImportToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                'TestImport',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';

@Component({
    imports: [TestImport]
})
export class SomeComponent {

}`);
        });
    });

    describe('No decorator arguments', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { Component } from '@angular/core';

@Component()
export class SomeComponent {

}`,
            );
        });

        it('should create the providers property', () => {
            addImportToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                'TestImport',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';

@Component({imports: [TestImport]})
export class SomeComponent {

}`);
        });
    });

    describe('The providers property is exists', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { Component } from '@angular/core';
import { TestImport } from '@angular/common';

@Component({
  imports: [TestImport]
})
export class SomeComponent {

}`,
            );
        });

        it('should add module to providers', () => {
            addImportToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                'NewTestImport',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';
import { TestImport } from '@angular/common';

@Component({
  imports: [TestImport, NewTestImport]
})
export class SomeComponent {

}`);
        });
    });
});
