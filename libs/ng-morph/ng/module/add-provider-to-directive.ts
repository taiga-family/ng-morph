import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddProviderOptions } from './add-to-ng-options';

export function addProviderToDirective({
  classDeclaration,
  provider,
  unique,
}: AddProviderOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'Directive',
    propertyName: 'providers',
    initializer: provider,
    unique,
    forceToArray: true,
  });
}
