import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addImportToModule } from 'ng-morph/ng/helpers/add-import-to-module';
import { getClasses } from 'ng-morph/classes';

describe('addImportToModule', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  describe('No imports property', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`
      );
    });

    it('should create the imports property', () => {
      addImportToModule(getClasses('src/main.ts', { name: 'SomeModule' })[0], {
        moduleName: 'TestModule',
        moduleSpecifier: '@test/scope',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { TestModule } from "@test/scope";

@NgModule({
        imports: [TestModule]
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

    it('should create the imports property', () => {
      addImportToModule(getClasses('src/main.ts', { name: 'SomeModule' })[0], {
        moduleName: 'TestModule',
        moduleSpecifier: '@test/scope',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { TestModule } from "@test/scope";

@NgModule({imports: [TestModule]})
export class SomeModule {

}`);
    });
  });

  describe('The imports property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class SomeModule {

}`
      );
    });

    it('should add module to imports', () => {
      addImportToModule(getClasses('src/main.ts', { name: 'SomeModule' })[0], {
        moduleName: 'TestModule',
        moduleSpecifier: '@test/scope',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModule } from "@test/scope";

@NgModule({
  imports: [CommonModule, TestModule]
})
export class SomeModule {

}`);
    });
  });
});
