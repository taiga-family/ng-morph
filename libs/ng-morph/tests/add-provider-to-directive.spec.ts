import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {
    addProviderToDirective,
    createProject,
    createSourceFile,
    getClasses,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

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

}`,
            );
        });

        it('should create the providers property', () => {
            addProviderToDirective(
                getClasses('src/main.ts', {
                    name: 'SomeDirective',
                })[0],
                'TestProvider',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';

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

}`,
            );
        });

        it('should create the providers property', () => {
            addProviderToDirective(
                getClasses('src/main.ts', {
                    name: 'SomeDirective',
                })[0],
                'TestProvider',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';

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

}`,
            );
        });

        it('should add module to providers', () => {
            addProviderToDirective(
                getClasses('src/main.ts', {
                    name: 'SomeDirective',
                })[0],
                'NewTestService',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toBe(`import { Component } from '@angular/core';
import { TestService } from 'test-package';

@Directive({
  providers: [TestService, NewTestService]
})
export class SomeDirective {

}`);
        });
    });
});
