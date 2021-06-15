import { ClassDeclaration } from 'ts-morph';
import { checkAndAddImport } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToNgModule(
  classDeclaration: ClassDeclaration,
  moduleName: string,
  packageName?: string
) {
  if (packageName) {
    checkAndAddImport(
      classDeclaration.getSourceFile().getFilePath(),
      moduleName,
      packageName
    );
  }

  pushToArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName);
}
