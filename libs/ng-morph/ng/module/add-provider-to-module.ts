import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToModule(
  classDeclaration: ClassDeclaration,
  provider: string
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'providers', provider);
}
