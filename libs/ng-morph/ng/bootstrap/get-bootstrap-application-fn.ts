import {getImports} from 'ng-morph/imports';
import type {CallExpression} from 'ts-morph';
import {Node, SyntaxKind} from 'ts-morph';

export function getBootstrapApplicationFn(
    mainFilePath: string,
): CallExpression | undefined {
    const [bootstrapApplicationImport] = getImports(mainFilePath, {
        moduleSpecifier: '@angular/platform-browser',
    });

    const namedImport = bootstrapApplicationImport
        ?.getNamedImports()
        .find(imp => imp.getName() === 'bootstrapApplication');

    return namedImport
        ?.getNameNode()
        .findReferencesAsNodes()
        .find(ref => Node.isCallExpression(ref.getParent()))
        ?.getParentIfKind(SyntaxKind.CallExpression);
}
