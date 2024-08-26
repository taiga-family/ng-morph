import {ChangeDetectionStrategy, Component} from '@angular/core';
import { TuiAddonDoc } from '@taiga-ui/addon-doc';

const interfaces = `import {
    addInterfaces,
    editInterfaces,
    getInterfaces,
    removeInterfaces,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addInterfaces('some/path/file.ts', {
    name: 'A',
    properties: [{ name: 's', type: 'string' }],
    methods: [{ name: 'method', returnType: 'number' }],
});

const declarations = getInterfaces('some/path/**.ts');

editInterfaces(declarations, () => ({
    name: 'B',
}));

removeInterfaces(declarations);

saveActiveProject();
`;

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InterfacesComponent {
    protected readonly interfaces = interfaces;
}
