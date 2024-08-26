import { TuiAddonDoc } from "@taiga-ui/addon-doc";
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
    standalone: true,
    selector: 'variables',
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VariablesComponent {
    protected readonly code = code;
}
