import { ClassDeclaration } from 'ts-morph';
import { checkAndAddImport } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addExportToNgModule(
  classDeclaration: ClassDeclaration,
  exportName: string,
  packageName?: string
) {
  if (packageName) {
    checkAndAddImport(
      classDeclaration.getSourceFile().getFilePath(),
      exportName,
      packageName
    );
  }
  pushToArrayProperty(classDeclaration, 'NgModule', 'exports', exportName);
}
