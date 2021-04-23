import { CallExpression, Node } from 'ts-morph';
import { getImports } from 'ng-morph/imports';
import { getActiveProject } from 'ng-morph/project';

export function getBootstrapFn(mainFilePath: string): CallExpression {
  const [platformBrowserImport] = getImports(mainFilePath, {
    moduleSpecifier: '@angular/platform-browser-dynamic',
  });

  const namedImport = platformBrowserImport
    .getNamedImports()
    .find((imp) => imp.getName() === 'platformBrowserDynamic');

  const refs = getActiveProject()
    .getLanguageService()
    .findReferencesAsNodes(namedImport);

  return refs
    .find((ref) => Node.isCallExpression(ref.getParent()))
    .getParent()
    .getParent()
    .getParent() as CallExpression;
}
