import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {getBootstrapApplicationFn} from 'ng-morph/ng';
import {createProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {getVariables} from 'ng-morph/variables';

import {addProviderToBootstrapApplicationFn} from './add-provider-to-bootstrap-application-fn';

describe('addProviderToBootstrapApplicationFn', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    it('should add provider to bootstrapApplication', () => {
        createSourceFile(
            'src/main.ts',
            `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent)
`,
        );
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

        addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp()');

        expect(bootstrapFn.getText()).toBe(
            'bootstrapApplication(AppComponent, {providers: [provideApp()]})',
        );
    });

    it('should add provider to bootstrapApplication with existing providers', () => {
        createSourceFile(
            'src/main.ts',
            `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideApp()]})
`,
        );
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

        addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp2()');

        expect(bootstrapFn.getText()).toBe(
            'bootstrapApplication(AppComponent, {providers: [provideApp(), provideApp2()]})',
        );
    });

    it('should add provider to bootstrapApplication with existing providers and unique option', () => {
        createSourceFile(
            'src/main.ts',
            `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideApp()]})
`,
        );
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

        addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp()', {
            unique: true,
        });

        expect(bootstrapFn.getText()).toBe(
            'bootstrapApplication(AppComponent, {providers: [provideApp()]})',
        );
    });

    it('should add provider to variable that used for bootstrapApplication', () => {
        createSourceFile(
            'src/main.ts',
            `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

const options = {providers: [provideApp()]};

bootstrapApplication(AppComponent, options)
`,
        );
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');
        const [options] = getVariables('src/main.ts')[0].getDeclarations();

        addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp2()');

        expect(options.getText()).toBe(
            'options = {providers: [provideApp(), provideApp2()]}',
        );
    });
});
