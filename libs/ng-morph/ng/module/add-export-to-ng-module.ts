import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddExportOptions } from './add-to-ng-options';

export function addExportToNgModule({
  classDeclaration,
  exportName,
  unique,
}: AddExportOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'exports',
    initializer: exportName,
    unique,
    forceToArray: true,
  });
}
