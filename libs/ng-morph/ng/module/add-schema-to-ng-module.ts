import { ClassDeclaration } from 'ts-morph';
import { pushToDecoratorArrayProperty } from '../helpers/push-to-decorator-array-property';

export function addSchemaToNgModule(
  classDeclaration: ClassDeclaration,
  schema: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'schemas', schema, {
    unique,
    forceToArray: true,
  });
}
