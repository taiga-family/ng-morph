import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addDeclarationToModule(
  classDeclaration: ClassDeclaration,
  declaration: string
) {
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'declarations',
    declaration
  );
}
