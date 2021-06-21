import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddSchemaOptions } from './add-to-ng-options';

export function addSchemaToNgModule({
  classDeclaration,
  schema,
  unique,
}: AddSchemaOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'schemas',
    initializer: schema,
    unique,
    forceToArray: true,
  });
}
