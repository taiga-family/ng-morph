import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {
    addDeclarationToNgModule,
    createProject,
    createSourceFile,
    getClasses,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('addDeclarationToModule', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    describe('No declaration property', () => {
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
            addDeclarationToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({
    declarations: [TestComponent]
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

        it('should create the declarations property', () => {
            addDeclarationToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';

@NgModule({declarations: [TestComponent]})
export class SomeModule {

}`);
        });
    });

    describe('The declarations property is exists', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CommonComponent]
})
export class SomeModule {

}`,
            );
        });

        it('should add component to declarations', () => {
            addDeclarationToNgModule(
                getClasses('src/main.ts', {name: 'SomeModule'})[0],
                'TestComponent',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CommonComponent, TestComponent]
})
export class SomeModule {

}`);
        });
    });
});
