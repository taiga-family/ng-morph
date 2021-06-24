import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addEntryComponentToNgModule(
  classDeclaration: ClassDeclaration,
  component: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'entryComponents',
    component,
    { unique, forceToArray: true }
  );
}
