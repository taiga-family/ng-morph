import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addDeclarationToNgModule(
  classDeclaration: ClassDeclaration,
  declaration: string,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      declaration,
      packageName
    );
  }
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'declarations',
    declaration
  );
}
