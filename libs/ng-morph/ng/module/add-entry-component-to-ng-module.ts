import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddComponentOptions } from './add-to-ng-options';

export function addEntryComponentToNgModule({
  classDeclaration,
  component,
  unique,
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
    propertyName: 'entryComponents',
    initializer: component,
    unique,
    forceToArray: true,
  });
}
