import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'schemas', schema, {
    unique,
    forceToArray: true,
  });
}
