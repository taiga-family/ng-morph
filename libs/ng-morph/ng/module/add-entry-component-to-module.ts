import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addEntryComponentToModule(
  classDeclaration: ClassDeclaration,
  component: string
) {
  pushToArrayProperty(
    classDeclaration,
    'NgModule',
    'entryComponents',
    component
  );
}
