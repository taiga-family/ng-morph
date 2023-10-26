import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {addStyleUrlToComponent} from './add-style-url-to-component';
import {getClasses} from 'ng-morph/classes';

describe('addStyleUrlToComponent', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    describe('No styleUrl property', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { Component } from '@angular/core';

@Component({})
export class SomeComponent {

}`,
            );
        });

        it('should create the providers property', () => {
            addStyleUrlToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                '"./style.less"',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';

@Component({
    styleUrls: ["./style.less"]
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

}`,
            );
        });

        it('should create the providers property', () => {
            addStyleUrlToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                '"./style.less"',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';

@Component({styleUrls: ["./style.less"]})
export class SomeComponent {

}`);
        });
    });

    describe('The providers property is exists', () => {
        beforeEach(() => {
            createSourceFile(
                'src/main.ts',
                `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  styleUrls: ["./style.less"]
})
export class SomeComponent {

}`,
            );
        });

        it('should add module to providers', () => {
            addStyleUrlToComponent(
                getClasses('src/main.ts', {
                    name: 'SomeComponent',
                })[0],
                '"./new-style.less"',
            );

            saveActiveProject();

            expect(host.readContent('src/main.ts'))
                .toStrictEqual(`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  styleUrls: ["./style.less", "./new-style.less"]
})
export class SomeComponent {

}`);
        });
    });
});
