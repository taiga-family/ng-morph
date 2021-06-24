import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addDeclarationToNgModule(
  classDeclaration: ClassDeclaration,
  declaration: string,
  { unique }: { unique: boolean } = { unique: false }
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
