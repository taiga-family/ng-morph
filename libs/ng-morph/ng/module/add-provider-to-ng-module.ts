import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToNgModule(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
