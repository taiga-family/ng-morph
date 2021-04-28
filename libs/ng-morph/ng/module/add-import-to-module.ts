import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToModule(
  classDeclaration: ClassDeclaration,
  moduleName: string
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName);
}
