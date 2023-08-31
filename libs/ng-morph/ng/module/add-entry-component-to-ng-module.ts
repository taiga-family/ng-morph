import { ClassDeclaration } from 'ts-morph';
import { pushToDecoratorArrayProperty } from '../helpers/push-to-decorator-array-property';

export function addEntryComponentToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToDecoratorArrayProperty(
    classDeclaration,
    'NgModule',
    'entryComponents',
    component,
    { unique, forceToArray: true }
  );
}
