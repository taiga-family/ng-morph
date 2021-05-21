import { ChangeDetectionStrategy, Component } from '@angular/core';

const imports = `import {
    addImports,
    editImports,
    getImports,
    removeImports,
} from 'ng-morph';

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
`;

const exportsSamples = `import {
    addExports,
    editExports,
    getExports,
    removeExports,
} from 'ng-morph';

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
`;


@Component({
  selector: 'imports-and-exports',
  templateUrl: 'imports-and-exports.template.html',
  styleUrls: ['./imports-and-exports.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportsAndExportsComponent {
  readonly imports = imports;
  readonly exports = exportsSamples;
}
