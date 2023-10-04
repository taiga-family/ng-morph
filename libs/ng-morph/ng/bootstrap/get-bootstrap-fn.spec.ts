import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { createProject, setActiveProject } from 'ng-morph/project';
import { createSourceFile } from 'ng-morph/source-file';
import { getBootstrapFn } from './get-bootstrap-fn';
import { Node } from 'ts-morph';

describe('getBootstrapFn', () => {
  let host: UnitTestTree;

  beforeEach(() => {
    host = new UnitTestTree(new HostTree());

    setActiveProject(createProject(host));
  });

  it('should find the bootstrap function', () => {
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
    const bootstrapFn = getBootstrapFn('src/main.ts');

    expect(bootstrapFn.getText()).toEqual(`platformBrowserDynamic()
  .bootstrapModule(AppModule)`);
    expect(Node.isCallExpression(bootstrapFn)).toEqual(true);
  });

  it('should return undefined if bootstrap function is not found', () => {
    createSourceFile('src/main.ts', '');
    const bootstrapFn = getBootstrapFn('src/main.ts');

    expect(bootstrapFn).toBeUndefined();
  });
});
