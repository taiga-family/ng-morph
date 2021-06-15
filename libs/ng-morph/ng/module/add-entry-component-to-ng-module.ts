import { ClassDeclaration } from 'ts-morph';
import { checkAndAddImport } from '../helpers/check-and-add-import';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addEntryComponentToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  packageName?: string
) {
  if (packageName) {
    checkAndAddImport(
      classDeclaration.getSourceFile().getFilePath(),
      component,
      packageName
    );
  }

  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'entryComponents',
    component
  );
}
