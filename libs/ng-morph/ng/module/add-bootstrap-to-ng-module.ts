import { ClassDeclaration } from 'ts-morph';
import { checkImportAndAdd } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addBootstrapToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  packageName?: string
) {
  if (packageName) {
    checkImportAndAdd(
      classDeclaration.getSourceFile().getFilePath(),
      component,
      packageName
    );
  }
  pushToArrayProperty(classDeclaration, 'NgModule', 'bootstrap', component);
}
