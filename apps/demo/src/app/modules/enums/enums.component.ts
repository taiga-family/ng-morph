import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    addEnums,
    editEnums,
    getEnums,
    removeEnums,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addEnums('some/path/file.ts', [
    {
      name: 'Enum',
      isConst: true,
      members: [{ name: 'First' }, { name: 'second' }],
    },
    {
      name: 'EmptyEnum',
      isExported: true,
    },
]);

const declarations = getEnums('some/path/**.ts');

editEnums(declarations, () => ({
    name: 'B',
}));

removeEnums(declarations);

saveActiveProject();
`;

@Component({
  selector: 'enums',
  templateUrl: 'enums.template.html',
  styleUrls: ['./enums.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnumsComponent {
  readonly code = code;
}
