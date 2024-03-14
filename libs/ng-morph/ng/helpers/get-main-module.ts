import {getBootstrapFn} from 'ng-morph/ng/bootstrap/get-bootstrap-fn';
import type {ClassDeclaration, Identifier} from 'ts-morph';

export function getMainModule(mainFilePath: string): ClassDeclaration {
    const bootstrapFn = getBootstrapFn(mainFilePath);

    const [mainModuleIdentifier] = bootstrapFn.getArguments() as [Identifier];

    const [mainModuleClass] = mainModuleIdentifier.getDefinitionNodes() as [
        ClassDeclaration,
    ];

    return mainModuleClass;
}
