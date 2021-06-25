import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'schemas', schema, {
    unique,
    forceToArray: true,
  });
}
