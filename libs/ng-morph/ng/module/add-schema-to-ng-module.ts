import { ClassDeclaration } from 'ts-morph';
import { checkImportAndAdd } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  packageName?: string
) {
  if (packageName) {
    checkImportAndAdd(
      classDeclaration.getSourceFile().getFilePath(),
      schema,
      packageName
    );
  }
  pushToArrayProperty(classDeclaration, 'NgModule', 'schemas', schema);
}
