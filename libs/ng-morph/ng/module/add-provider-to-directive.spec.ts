import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getClasses } from 'ng-morph/classes';
import { addProviderToDirective } from '.';

describe('addProviderToDirective', () => {
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

@Directive({})
export class SomeDirective {

}`
      );
    });

    it('should create the providers property', () => {
      addProviderToDirective({
        classDeclaration: getClasses('src/main.ts', {
          name: 'SomeDirective',
        })[0],
        provider: 'TestProvider',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';

@Directive({
        providers: [TestProvider]
    })
export class SomeDirective {

}`);
    });
  });

  describe('No decorator arguments', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { Component } from '@angular/core';

@Directive()
export class SomeDirective {

}`
      );
    });

    it('should create the providers property', () => {
      addProviderToDirective({
        classDeclaration: getClasses('src/main.ts', {
          name: 'SomeDirective',
        })[0],
        provider: 'TestProvider',
      });

      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';

@Directive({providers: [TestProvider]})
export class SomeDirective {

}`);
    });
  });

  describe('The providers property is exists', () => {
    beforeEach(() => {
      createSourceFile(
        'src/main.ts',
        `import { Component } from '@angular/core';
import { TestService } from 'test-package';

@Directive({
  providers: [TestService]
})
export class SomeDirective {

}`
      );
    });

    it('should add module to providers', () => {
      addProviderToDirective({
        classDeclaration: getClasses('src/main.ts', {
          name: 'SomeDirective',
        })[0],
        provider: 'NewTestService',
      });
      saveActiveProject();

      expect(host.readContent('src/main.ts'))
        .toStrictEqual(`import { Component } from '@angular/core';
import { TestService } from 'test-package';

@Directive({
  providers: [TestService, NewTestService]
})
export class SomeDirective {

}`);
    });
  });
});
