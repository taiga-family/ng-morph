import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addExportToNgModule(
  classDeclaration: ClassDeclaration,
  exportName: string,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      exportName,
      packageName
    );
  }

  pushToArrayProperty(classDeclaration, 'NgModule', 'exports', exportName);
}
