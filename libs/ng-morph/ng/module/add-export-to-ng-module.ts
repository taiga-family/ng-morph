import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddExportOptions } from './add-to-ng-options';

export function addExportToNgModule({
  classDeclaration,
  exportName,
  unique,
  packageName,
}: AddExportOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      exportName,
      packageName
    );
  }

  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'exports',
    initializer: exportName,
    unique,
    forceToArray: true,
  });
}
