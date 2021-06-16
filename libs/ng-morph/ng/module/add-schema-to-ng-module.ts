import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  unique = false,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      schema,
      packageName
    );
  }

  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'schemas',
    schema,
    unique,
    true
  );
}
