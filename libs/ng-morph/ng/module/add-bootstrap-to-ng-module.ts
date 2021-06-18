import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddComponentOptions } from './add-to-ng-options';

export function addBootstrapToNgModule({
  classDeclaration,
  component,
  unique = false,
  packageName,
}: AddComponentOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      component,
      packageName
    );
  }
  
  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'bootstrap',
    initializer: component,
    unique,
    forceToArray: true,
  });
}
