import { ChangeDetectionStrategy, Component } from '@angular/core';

const types = `import {
    addTypeAliases,
    editTypeAliases,
    getTypeAliases,
    removeTypeAliases,
} from 'ng-morph';

addTypeAliases('some/path/file.ts', {
    name: 'A',
    typeParameters: ['T'],
    type: 'T[]',
});

const declarations = getTypeAliases('some/path/file.ts');

editTypeAliases(declarations, () => ({
    name: 'B',
}));

removeTypeAliases(declarations);
`;

@Component({
  selector: 'types',
  templateUrl: 'types.template.html',
  styleUrls: ['./types.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesComponent {
  readonly types = types;
}
