import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddImportOptions } from './add-to-ng-options';

export function addImportToNgModule({
  classDeclaration,
  moduleName,
  unique,
}: AddImportOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'imports',
    initializer: moduleName,
    unique,
    forceToArray: true,
  });
}
