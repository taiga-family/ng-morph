import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {
    addBootstrapToNgModule,
    createProject,
    createSourceFile,
    getClasses,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('addBootstrapToModule', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    describe('No bootstrap property', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`,
            );
        });

        it('should create the declarations property', () => {
            addBootstrapToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({
    bootstrap: [TestComponent]
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

        it('should create the bootstrap property', () => {
            addBootstrapToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );
            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({bootstrap: [TestComponent]})
export class SomeModule {

}`);
        });
    });

    describe('The bootstrap property is exists', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  bootstrap: [CommonComponent]
})
export class SomeModule {

}`,
            );
        });

        it('should add component to bootstrap', () => {
            addBootstrapToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  bootstrap: [CommonComponent, TestComponent]
})
export class SomeModule {

}`);
        });
    });
});
