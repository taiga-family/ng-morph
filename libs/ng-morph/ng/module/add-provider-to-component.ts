import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddProviderOptions } from './add-to-ng-options';

export function addProviderToComponent({
  classDeclaration,
  provider,
  unique = false,
}: AddProviderOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'Component',
    propertyName: 'providers',
    initializer: provider,
    unique,
    forceToArray: true,
  });
}
