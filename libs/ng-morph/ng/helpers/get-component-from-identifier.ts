import type {ClassDeclaration, Node} from 'ts-morph';

import {getImports} from '../../imports';
import {getNgComponents} from './ng-component';

export function getComponentFromIdentifier(
    identifier: Node,
): ClassDeclaration | undefined {
    const rootImportDeclaration = getImports(identifier.getSourceFile().getFilePath(), {
        namedImports: [identifier.getText()],
    })[0];

    const rootComponentPath =
        rootImportDeclaration.getModuleSpecifierSourceFile()?.getFilePath() || '';

    return getNgComponents(rootComponentPath, {name: identifier.getText()})[0];
}
