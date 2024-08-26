import {ChangeDetectionStrategy, Component} from '@angular/core';
import { TuiAddonDoc } from '@taiga-ui/addon-doc';

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
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GetBootstrapFunctionComponent {
    protected readonly bootstrap = bootstrap;
    protected readonly bootstrapApplication = bootstrapApplication;
    protected readonly addProviders = addProviders;
}
