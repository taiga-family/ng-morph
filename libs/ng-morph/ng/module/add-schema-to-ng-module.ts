import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddSchemaOptions } from './add-to-ng-options';

export function addSchemaToNgModule({
  classDeclaration,
  schema,
  unique,
  packageName,
}: AddSchemaOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      schema,
      packageName
    );
  }

  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'schemas',
    initializer: schema,
    unique,
    forceToArray: true,
  });
}
