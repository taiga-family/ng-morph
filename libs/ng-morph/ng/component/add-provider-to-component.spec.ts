import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getClasses } from 'ng-morph/classes';
import { addProviderToComponent } from './add-provider-to-component';

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

}`
      );
    });

    it('should create the providers property', () => {
      addProviderToComponent(
        getClasses('src/main.ts', {
          name: 'SomeComponent',
        })[0],
        'TestProvider'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';

@Component({
    providers: [TestProvider]
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

}`
      );
    });

    it('should create the providers property', () => {
      addProviderToComponent(
        getClasses('src/main.ts', {
          name: 'SomeComponent',
        })[0],
        'TestProvider'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';

@Component({providers: [TestProvider]})
export class SomeComponent {

}`);
    });
  });

  describe('The providers property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { Component } from '@angular/core';
import { TestProvider } from '@angular/common';

@Component({
  providers: [TestProvider]
})
export class SomeComponent {

}`
      );
    });

    it('should add module to providers', () => {
      addProviderToComponent(
        getClasses('src/main.ts', {
          name: 'SomeComponent',
        })[0],
        'NewTestProvider'
      );

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';
import { TestProvider } from '@angular/common';

@Component({
  providers: [TestProvider, NewTestProvider]
})
export class SomeComponent {

}`);
    });
  });
});
