import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addDeclarationToNgModule(
  classDeclaration: ClassDeclaration,
  declaration: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'declarations',
    declaration,
    {
      unique,
      forceToArray: true,
    }
  );
}
