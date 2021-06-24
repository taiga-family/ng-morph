import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addBootstrapToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'bootstrap', component, {
    unique,
    forceToArray: true,
  });
}
