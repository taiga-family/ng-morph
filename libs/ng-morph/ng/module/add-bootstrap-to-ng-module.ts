import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddComponentOptions } from './add-to-ng-options';

export function addBootstrapToNgModule({
  classDeclaration,
  component,
  unique = false,
}: AddComponentOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'bootstrap',
    initializer: component,
    unique,
    forceToArray: true,
  });
}
