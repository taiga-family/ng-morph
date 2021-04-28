import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToModule(
  classDeclaration: ClassDeclaration,
  schema: string
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'schemas', schema);
}
