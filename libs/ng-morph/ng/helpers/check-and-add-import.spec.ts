import { HostTree } from '@angular-devkit/schematics';
import { UnitTestTree } from '@angular-devkit/schematics/testing';
import {
  setActiveProject,
  createProject,
  saveActiveProject,
} from '../../project';
import { createSourceFile } from '../../source-file';
import { checkImportAndAdd } from './check-and-add-import';

describe('checkImportAndAdd', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  describe('Package import does not exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`
      );
    });

    it('should add the import', () => {
      checkImportAndAdd('src/main.ts', 'TestModule', 'test-package');

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { TestModule } from "test-package";
import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`);
    });
  });

  describe('Package import already exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`
      );
    });

    it('should add the import to existing declaration', () => {
      checkImportAndAdd('src/main.ts', 'TestModule', '@angular/core');

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule, TestModule } from "@angular/core";
@NgModule()
export class SomeModule {

}`);
    });
  });

  describe('Initializer import already exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`
      );
    });

    it('should not add the import', () => {
      checkImportAndAdd('src/main.ts', 'NgModule', '@angular/core');

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule()
export class SomeModule {

}`);
    });
  });
});
