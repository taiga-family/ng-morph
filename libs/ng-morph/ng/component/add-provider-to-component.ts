import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToComponent(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'Component', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
