import {ChangeDetectionStrategy, Component} from '@angular/core';

const code = `import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addVariables('some/path/file.ts', {
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: 'name',
        initializer: "'value'",
      },
    ],
});

const declarations = getVariables('some/path/**.ts');

editVariables(declarations, () => ({
    name: 'B',
}));

removeVariables(declarations);

saveActiveProject();
`;

@Component({
    selector: 'variables',
    templateUrl: './variables.template.html',
    styleUrls: ['./variables.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariablesComponent {
    protected readonly code = code;
}
