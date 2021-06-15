import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addBootstrapToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      component,
      packageName
    );
  }
  pushToArrayProperty(classDeclaration, 'NgModule', 'bootstrap', component);
}
