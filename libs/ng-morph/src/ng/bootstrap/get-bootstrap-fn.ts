import {CallExpression, Identifier} from 'ts-morph';
import {Node, SyntaxKind} from 'ts-morph';

import {getImports} from '../../imports';

export function getBootstrapFn(mainFilePath: string): CallExpression | undefined {
    const [platformBrowserImport] = getImports(mainFilePath, {
        moduleSpecifier: '@angular/platform-browser-dynamic',
    });

    const namedImport = platformBrowserImport
        ?.getNamedImports()
        .find((imp) => imp.getName() === 'platformBrowserDynamic');

    const nameNode = namedImport?.getNameNode();

    if (nameNode instanceof Identifier) {
        return nameNode
            .findReferencesAsNodes()
            .find((ref) => Node.isCallExpression(ref.getParent()))
            ?.getParentIfKind(SyntaxKind.CallExpression)
            ?.getParentIfKind(SyntaxKind.PropertyAccessExpression)
            ?.getParentIfKind(SyntaxKind.CallExpression);
    }

    return undefined;
}
