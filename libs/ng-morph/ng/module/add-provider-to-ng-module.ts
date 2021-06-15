import { ClassDeclaration } from 'ts-morph';
import { checkImportAndAdd } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToNgModule(
  classDeclaration: ClassDeclaration,
  provider: string,
  packageName?: string
) {
  if (packageName) {
    checkImportAndAdd(
      classDeclaration.getSourceFile().getFilePath(),
      provider,
      packageName
    );
  }

  pushToArrayProperty(classDeclaration, 'NgModule', 'providers', provider);
}
