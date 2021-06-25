import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToDirective(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'Directive', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
