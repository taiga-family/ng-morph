import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

const imports = `import {
    addImports,
    editImports,
    getImports,
    removeImports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addImports('some/path/file.ts', [
    {
      namedImports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      defaultImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedImports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const imports = getImports('some/path/**.ts', {
    moduleSpecifier: 'd',
    namedImports: 'c',
});

editImports(imports, () => ({
    namedImports: ['b,c'],
}));

removeImports(imports);

saveActiveProject();
`;

const exportsSamples = `import {
    addExports,
    editExports,
    getExports,
    removeExports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addExports('some/path/file.ts', [
    {
      namedExports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceExport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedExports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const exports = getExports('some/path/**.ts', {
    moduleSpecifier: 'd',
});

editExports(exports, () => ({
    namedExports: ['b,c'],
}));

removeExports(exports);

saveActiveProject();
`;

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImportsAndExportsComponent {
    protected readonly imports = imports;
    protected readonly exports = exportsSamples;
}
