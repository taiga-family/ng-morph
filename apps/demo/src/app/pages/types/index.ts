import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

const types = `import {
    addTypeAliases,
    editTypeAliases,
    getTypeAliases,
    removeTypeAliases,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TypesComponent {
    protected readonly types = types;
}
