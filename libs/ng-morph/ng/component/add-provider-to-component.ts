import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToComponent(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'Component', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
