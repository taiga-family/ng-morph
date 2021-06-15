import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addProviderToNgModule } from './add-provider-to-ng-module';
import { getClasses } from 'ng-morph/classes';

describe('addProviderToModule', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  describe('No providers property', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`
      );
    });

    it('should create the providers property', () => {
      addProviderToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestService'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({
        providers: [TestService]
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

    it('should create the providers property', () => {
      addProviderToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestService'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({providers: [TestService]})
export class SomeModule {

}`);
    });
  });

  describe('The providers property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [CommonService]
})
export class SomeModule {

}`
      );
    });

    it('should add module to providers', () => {
      addProviderToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestService'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [CommonService, TestService]
})
export class SomeModule {

}`);
    });
  });

  describe('The providers property is exists and providers is a imported const', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { PROVIDERS } from './providers.ts';

@NgModule({
  providers: PROVIDERS
})
export class SomeModule {

}`
      );
    });

    it('should add module to providers', () => {
      addProviderToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestService',
        'test-package'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { TestService } from "test-package";
import { NgModule } from '@angular/core';
import { PROVIDERS } from './providers.ts';

@NgModule({
  providers: [PROVIDERS, TestService]
})
export class SomeModule {

}`);
    });
  });
});
