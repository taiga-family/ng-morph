import { ClassDeclaration } from 'ts-morph';
import { checkImportAndAdd } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addDeclarationToNgModule(
  classDeclaration: ClassDeclaration,
  declaration: string,
  packageName?: string
) {
  if (packageName) {
    checkImportAndAdd(
      classDeclaration.getSourceFile().getFilePath(),
      declaration,
      packageName
    );
  }
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'declarations',
    declaration
  );
}
