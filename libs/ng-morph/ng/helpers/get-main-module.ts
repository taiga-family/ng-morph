import { ClassDeclaration, Identifier } from 'ts-morph';
import { getBootstrapFn } from 'ng-morph/ng/helpers/get-bootstrap-fn';

export function getMainModule(mainFilePath: string): ClassDeclaration {
  const bootstrapFn = getBootstrapFn(mainFilePath);

  const [mainModuleIdentifier] = bootstrapFn.getArguments() as [Identifier];

  const [mainModuleClass] = mainModuleIdentifier.getDefinitionNodes() as [
    ClassDeclaration
  ];

  return mainModuleClass;
}
