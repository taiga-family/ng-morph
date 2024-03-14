import {ChangeDetectionStrategy, Component} from '@angular/core';

const code = `import {
    getMainModule
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classDeclaration = getMainModule('src/main.ts');
`;

@Component({
    selector: 'get-main-module',
    templateUrl: './get-main-module.template.html',
    styleUrls: ['./get-main-module.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetMainModuleComponent {
    protected readonly code = code;
}
