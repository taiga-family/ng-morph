import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddProviderOptions } from './add-to-ng-options';

export function addProviderToNgModule({
  classDeclaration,
  provider,
  unique,
  packageName,
}: AddProviderOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      provider,
      packageName
    );
  }

  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'providers',
    initializer: provider,
    unique,
    forceToArray: true,
  });
}
