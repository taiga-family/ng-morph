import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {getMainModule} from 'ng-morph/ng';
import {createProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile} from 'ng-morph/source-file';
import {Node} from 'ts-morph';

describe('getMainModule', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'src/main.ts',
            `import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
`,
        );

        createSourceFile(
            'src/app/app.module.ts',
            `
import {NgModule} from '@angular/core';

@NgModule()
export class AppModule {

}
    `,
        );
    });

    it('should find the AppModule class', () => {
        const classDeclaration = getMainModule('src/main.ts');

        expect(classDeclaration.getText()).toBe(`@NgModule()
export class AppModule {

}`);
        expect(Node.isClassDeclaration(classDeclaration)).toBe(true);
    });
});
