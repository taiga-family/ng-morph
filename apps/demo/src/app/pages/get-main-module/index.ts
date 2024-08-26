import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDocModule, TuiDocPageModule} from '@taiga-ui/addon-doc';

const code = `import {
    getMainModule
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classDeclaration = getMainModule('src/main.ts');
`;

@Component({
    standalone: true,
    imports: [TuiAddonDocModule, TuiDocPageModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GetMainModuleComponent {
    protected readonly code = code;
}
