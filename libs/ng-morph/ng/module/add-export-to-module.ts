import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addExportToModule(
  classDeclaration: ClassDeclaration,
  exportName: string
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'exports', exportName);
}
