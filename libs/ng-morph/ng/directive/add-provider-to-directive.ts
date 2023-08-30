import { ClassDeclaration } from 'ts-morph';
import { pushToDecoratorArrayProperty } from '../helpers/push-to-decorator-array-property';

export function addProviderToDirective(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToDecoratorArrayProperty(classDeclaration, 'Directive', 'providers', provider, {
    unique,
    forceToArray: true,
  });
}
