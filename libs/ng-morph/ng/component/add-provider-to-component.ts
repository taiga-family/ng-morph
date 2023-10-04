import { ClassDeclaration } from 'ts-morph';
import { pushToDecoratorArrayProperty } from '../helpers/push-to-decorator-array-property';

export function addProviderToComponent(
  classDeclaration: ClassDeclaration,
  provider: string,
  { unique = false }: { unique?: boolean } = {},
) {
  pushToDecoratorArrayProperty(
    classDeclaration,
    'Component',
    'providers',
    provider,
    {
      unique,
      forceToArray: true,
    },
  );
}
