import { UnitTestTree } from "@angular-devkit/schematics/testing";
import { HostTree } from "@angular-devkit/schematics";
import { createProject, setActiveProject } from "ng-morph/project";
import { createSourceFile } from "ng-morph/source-file";
import { getBootstrapApplicationFn } from "ng-morph/ng";
import { addProviderToBootstrapApplicationFn } from "./add-provider-to-bootstrap-application-fn";

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
`
    )
    const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

    addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp()');

    expect(bootstrapFn.getText()).toEqual(`bootstrapApplication(AppComponent, {providers: [provideApp()]})`);
  });

  it('should add provider to bootstrapApplication with existing providers', () => {
    createSourceFile(
      'src/main.ts',
      `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideApp()]})
`
    )
    const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

    addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp2()');

    expect(bootstrapFn.getText()).toEqual(`bootstrapApplication(AppComponent, {providers: [provideApp(), provideApp2()]})`);
  })

  it('should add provider to bootstrapApplication with existing providers and unique option', () => {
    createSourceFile(
      'src/main.ts',
      `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideApp()]})
`
    )
    const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

    addProviderToBootstrapApplicationFn(bootstrapFn, 'provideApp()', { unique: true });

    expect(bootstrapFn.getText()).toEqual(`bootstrapApplication(AppComponent, {providers: [provideApp()]})`);
  })
})
