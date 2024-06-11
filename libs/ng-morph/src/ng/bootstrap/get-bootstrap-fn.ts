import type {CallExpression} from 'ts-morph';
import {Node, SyntaxKind} from 'ts-morph';

import {getImports} from '../../imports';

export function getBootstrapFn(mainFilePath: string): CallExpression | undefined {
    const [platformBrowserImport] = getImports(mainFilePath, {
        moduleSpecifier: '@angular/platform-browser-dynamic',
    });

    const namedImport = platformBrowserImport
        ?.getNamedImports()
        .find(imp => imp.getName() === 'platformBrowserDynamic');

    return namedImport
        ?.getNameNode()
        .findReferencesAsNodes()
        .find(ref => Node.isCallExpression(ref.getParent()))
        ?.getParentIfKind(SyntaxKind.CallExpression)
        ?.getParentIfKind(SyntaxKind.PropertyAccessExpression)
        ?.getParentIfKind(SyntaxKind.CallExpression);
}
