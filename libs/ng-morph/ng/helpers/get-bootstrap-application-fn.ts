import { CallExpression, Node, SyntaxKind } from "ts-morph";
import { getImports } from "ng-morph/imports";

export function getBootstrapApplicationFn(mainFilePath: string): CallExpression {
  const [bootstrapApplicationImport] = getImports(mainFilePath, {
    moduleSpecifier: '@angular/platform-browser',
  });

  const namedImport = bootstrapApplicationImport
    ?.getNamedImports()
    .find((imp) => imp.getName() === 'bootstrapApplication');

  return namedImport
    ?.getNameNode()
    .findReferencesAsNodes()
    .find((ref) => Node.isCallExpression(ref.getParent()))
    ?.getParentIfKind(SyntaxKind.CallExpression)
}
