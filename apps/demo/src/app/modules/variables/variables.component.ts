import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
} from 'ng-morph';

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
`;

@Component({
  selector: 'variables',
  templateUrl: 'variables.template.html',
  styleUrls: ['./variables.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariablesComponent {
  readonly code = code;
}
