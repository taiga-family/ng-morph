import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {getClasses} from 'ng-morph/classes';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';

import {addExportToNgModule} from './add-export-to-ng-module';

describe('addExportToModule', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    describe('No exports property', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`,
            );
        });

        it('should create the imports property', () => {
            addExportToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestModule',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({
    exports: [TestModule]
})
export class SomeModule {

}`);
        });
    });

    describe('No decorator arguments', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`,
            );
        });

        it('should create the exports property', () => {
            addExportToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestModule',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({exports: [TestModule]})
export class SomeModule {

}`);
        });
    });

    describe('The exports property is exists', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CommonModule]
})
export class SomeModule {

}`,
            );
        });

        it('should add module to exports', () => {
            addExportToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestModule',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CommonModule, TestModule]
})
export class SomeModule {

}`);
        });
    });
});
