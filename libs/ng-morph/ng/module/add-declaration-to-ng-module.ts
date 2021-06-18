import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';
import { AddDeclarationOptions } from './add-to-ng-options';

export function addDeclarationToNgModule({
  classDeclaration,
  declaration,
  unique = false,
  packageName,
}: AddDeclarationOptions) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      declaration,
      packageName
    );
  }

  pushToArrayProperty({
    classDeclaration,
    decoratorName: 'NgModule',
    propertyName: 'declarations',
    initializer: declaration,
    unique,
    forceToArray: true,
  });
}
