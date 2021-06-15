import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addImportToNgModule } from 'ng-morph/ng/module/add-import-to-ng-module';
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
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestModule'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

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
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestModule'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

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
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestModule.forRoot()'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, TestModule.forRoot()]
})
export class SomeModule {

}`);
    });

    it('should not add module to imports if initializer is exist', () => {
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'CommonModule'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class SomeModule {

}`);
    });
  });

  describe('Package name is specified', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingModule } from 'test-package';

@NgModule({
  imports: [CommonModule, ExistingModule]
})
export class SomeModule {

}`
      );
    });

    it('should add module to imports', () => {
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestModule',
        'test-package-new'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { TestModule } from "test-package-new";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingModule } from 'test-package';

@NgModule({
  imports: [CommonModule, ExistingModule, TestModule]
})
export class SomeModule {

}`);
    });

    it('should add module to imports', () => {
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'TestModule',
        'test-package'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { ExistingModule, TestModule } from "test-package";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ExistingModule, TestModule]
})
export class SomeModule {

}`);
    });

    it('should not add module to imports', () => {
      addImportToNgModule(
        getClasses('src/main.ts', { name: 'SomeModule' })[0],
        'ExistingModule',
        'test-package'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingModule } from 'test-package';

@NgModule({
  imports: [CommonModule, ExistingModule]
})
export class SomeModule {

}`);
    });
  });
});
