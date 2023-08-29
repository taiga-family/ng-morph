import { CallExpression, Node, SyntaxKind } from 'ts-morph';
import { getImports } from 'ng-morph/imports';

export function getBootstrapFn(mainFilePath: string): CallExpression | undefined {
  const [platformBrowserImport] = getImports(mainFilePath, {
    moduleSpecifier: '@angular/platform-browser-dynamic',
  });

  const namedImport = platformBrowserImport
    ?.getNamedImports()
    .find((imp) => imp.getName() === 'platformBrowserDynamic');

  return namedImport
    ?.getNameNode()
    .findReferencesAsNodes()
    .find((ref) => Node.isCallExpression(ref.getParent()))
    ?.getParentIfKind(SyntaxKind.CallExpression)
    ?.getParentIfKind(SyntaxKind.PropertyAccessExpression)
    ?.getParentIfKind(SyntaxKind.CallExpression)
}
