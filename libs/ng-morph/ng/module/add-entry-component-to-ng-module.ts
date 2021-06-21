import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddComponentOptions } from './add-to-ng-options';

export function addEntryComponentToNgModule({
  classDeclaration,
  component,
  unique,
}: AddComponentOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'entryComponents',
    initializer: component,
    unique,
    forceToArray: true,
  });
}
