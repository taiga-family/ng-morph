import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

const code = `import {
    addFunctions,
    editFunctions,
    getFunctions,
    removeFunctions,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addFunctions('some/**/**.ts', {
    isExported: true,
    name: 'b',
    statements: "return 'b'",
});

const declarations = getFunctions('some/path/**.ts');

editFunctions(functions, () => ({
    isExported: true,
    name: 'b',
    statements: "return 'b'",
}));

removeFunctions(declarations);

saveActiveProject();
`;

@Component({
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FunctionsComponent {
    protected readonly code = code;
}
