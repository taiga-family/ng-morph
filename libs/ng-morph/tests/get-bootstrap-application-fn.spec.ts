import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';
import {Node} from 'ts-morph';

describe('getBootstrapApplicationFn', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));
    });

    it('should find the bootstrap function', () => {
        createSourceFile(
            'src/main.ts',
            `import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent)
`,
        );
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

        expect(bootstrapFn.getText()).toBe('bootstrapApplication(AppComponent)');
        expect(Node.isCallExpression(bootstrapFn)).toBe(true);
    });

    it('should return undefined if bootstrap function is not found', () => {
        createSourceFile('src/main.ts', '');
        const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

        expect(bootstrapFn).toBeUndefined();
    });
});
