import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddProviderOptions } from './add-to-ng-options';

export function addProviderToNgModule({
  classDeclaration,
  provider,
  unique,
}: AddProviderOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'providers',
    initializer: provider,
    unique,
    forceToArray: true,
  });
}
