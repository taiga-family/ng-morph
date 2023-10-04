import { ClassDeclaration } from 'ts-morph';
import { pushToDecoratorArrayProperty } from '../helpers/push-to-decorator-array-property';

export function addStyleUrlToComponent(
  classDeclaration: ClassDeclaration,
  styleUrl: string,
  { unique = false }: { unique?: boolean } = {},
) {
  pushToDecoratorArrayProperty(
    classDeclaration,
    'Component',
    'styleUrls',
    styleUrl,
    {
      unique,
    },
  );
}
