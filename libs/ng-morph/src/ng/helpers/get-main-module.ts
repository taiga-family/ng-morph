import type {ClassDeclaration, Identifier} from 'ts-morph';

import {getBootstrapFn} from '../bootstrap';

export function getMainModule(mainFilePath: string): ClassDeclaration | undefined {
    const bootstrapFn = getBootstrapFn(mainFilePath);

    const [mainModuleIdentifier] =
        (bootstrapFn?.getArguments?.() as [Identifier] | undefined) || [];

    const [mainModuleClass] =
        (mainModuleIdentifier?.getDefinitionNodes() as [ClassDeclaration] | undefined) ||
        [];

    return mainModuleClass;
}
