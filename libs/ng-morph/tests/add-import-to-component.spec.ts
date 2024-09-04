import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {
    addImportToComponent,
    createProject,
    createSourceFile,
    getClasses,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

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
            const classFile = getClasses('src/main.ts', {
                name: 'SomeComponent',
            })[0];

            if (classFile) {
                addImportToComponent(classFile, 'TestImport');
            }

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';

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
            const classFile = getClasses('src/main.ts', {
                name: 'SomeComponent',
            })[0];

            if (classFile) {
                addImportToComponent(classFile, 'TestImport');
            }

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';

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
            const classFile = getClasses('src/main.ts', {
                name: 'SomeComponent',
            })[0];

            if (classFile) {
                addImportToComponent(classFile, 'NewTestImport');
            }

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';
import { TestImport } from '@angular/common';

@Component({
  imports: [TestImport, NewTestImport]
})
export class SomeComponent {

}`);
        });
    });
});
