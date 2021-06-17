import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { addSchemaToNgModule } from './add-schema-to-ng-module';
import { getClasses } from 'ng-morph/classes';

describe('addSchemaToModule', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  describe('No schemas property', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';

@NgModule({})
export class SomeModule {

}`
      );
    });

    it('should create the schemas property', () => {
      addSchemaToNgModule({
        classDeclaration: getClasses('src/main.ts', { name: 'SomeModule' })[0],
        schema: 'CUSTOM_ELEMENTS_SCHEMA',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

    it('should create the schemas property', () => {
      addSchemaToNgModule({
        classDeclaration: getClasses('src/main.ts', { name: 'SomeModule' })[0],
        schema: 'CUSTOM_ELEMENTS_SCHEMA',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';

@NgModule({schemas: [CUSTOM_ELEMENTS_SCHEMA]})
export class SomeModule {

}`);
    });
  });

  describe('The schemas property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA]
})
export class SomeModule {

}`
      );
    });

    it('should add module to schemas', () => {
      addSchemaToNgModule({
        classDeclaration: getClasses('src/main.ts', { name: 'SomeModule' })[0],
        schema: 'CUSTOM_ELEMENTS_SCHEMA',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SomeModule {

}`);
    });
  });
});
