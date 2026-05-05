import {type CallExpression, Identifier, Node, SyntaxKind} from 'ts-morph';

import {getImports} from '../../imports';

export function getBootstrapApplicationFn(
    mainFilePath: string,
): CallExpression | undefined {
    const [bootstrapApplicationImport] = getImports(mainFilePath, {
        moduleSpecifier: '@angular/platform-browser',
    });

    const namedImport = bootstrapApplicationImport
        ?.getNamedImports()
        .find((imp) => imp.getName() === 'bootstrapApplication');

    const nameNode = namedImport?.getNameNode();

    return nameNode instanceof Identifier
        ? nameNode
              .findReferencesAsNodes()
              .find((ref) => Node.isCallExpression(ref.getParent()))
              ?.getParentIfKind(SyntaxKind.CallExpression)
        : undefined;
}
