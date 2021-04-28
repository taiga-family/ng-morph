import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addBootstrapToModule(
  classDeclaration: ClassDeclaration,
  component: string
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'bootstrap', component);
}
