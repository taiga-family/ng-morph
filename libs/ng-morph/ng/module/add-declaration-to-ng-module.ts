import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddDeclarationOptions } from './add-to-ng-options';

export function addDeclarationToNgModule({
  classDeclaration,
  declaration,
  unique = false,
}: AddDeclarationOptions) {
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'declarations',
    initializer: declaration,
    unique,
    forceToArray: true,
  });
}
