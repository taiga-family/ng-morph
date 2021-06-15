import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToComponent(
  classDeclaration: ClassDeclaration,
  provider: string,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      provider,
      packageName
    );
  }

  pushToArrayProperty(classDeclaration, 'Component', 'providers', provider);
}
