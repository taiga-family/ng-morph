import { ClassDeclaration } from 'ts-morph';
import { checkAndAddImport } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  packageName?: string
) {
  if (packageName) {
    checkAndAddImport(
      classDeclaration.getSourceFile().getFilePath(),
      schema,
      packageName
    );
  }
  pushToArrayProperty(classDeclaration, 'NgModule', 'schemas', schema);
}
