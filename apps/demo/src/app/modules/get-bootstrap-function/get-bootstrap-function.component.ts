import {ChangeDetectionStrategy, Component} from '@angular/core';

const bootstrap = `import {
    getBootstrapFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapFn('src/main.ts');
`;

const bootstrapApplication = `import {
    getBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');
`;

const addProviders = `import {
    getBootstrapApplicationFn,
    addProviderToBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

addProviderToBootstrapApplicationFn(bootstrapFn, 'provideRouter()');
`;

@Component({
    selector: 'get-bootstrap-function',
    templateUrl: './get-bootstrap-function.template.html',
    styleUrls: ['./get-bootstrap-function.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetBootstrapFunctionComponent {
    readonly bootstrap = bootstrap;
    readonly bootstrapApplication = bootstrapApplication;
    readonly addProviders = addProviders;
}
