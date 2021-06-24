import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getClasses } from 'ng-morph/classes';
import { addEntryComponentToNgModule } from './add-entry-component-to-ng-module';

describe('addEntryComponentToModule', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  describe('No entryComponents property', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`
      );
    });

    it('should create the entryComponents property', () => {
      addEntryComponentToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestComponent'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({
        entryComponents: [TestComponent]
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

}`
      );
    });

    it('should create the entryComponents property', () => {
      addEntryComponentToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestComponent'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({entryComponents: [TestComponent]})
export class SomeModule {

}`);
    });
  });

  describe('The entryComponents property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  entryComponents: [CommonComponent]
})
export class SomeModule {

}`
      );
    });

    it('should add module to entryComponents', () => {
      addEntryComponentToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestComponent'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  entryComponents: [CommonComponent, TestComponent]
})
export class SomeModule {

}`);
    });
  });
});
