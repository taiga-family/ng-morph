import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddImportOptions } from './add-to-ng-options';

export function addImportToNgModule({
  classDeclaration,
  moduleName,
  unique,
  packageName,
}: AddImportOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      moduleName,
      packageName
    );
  }

  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'imports',
    initializer: moduleName,
    unique,
    forceToArray: true,
  });
}
