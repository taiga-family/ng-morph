import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addProviderToDirective(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'Directive', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
