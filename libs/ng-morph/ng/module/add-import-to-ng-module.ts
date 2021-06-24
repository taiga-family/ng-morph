import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToNgModule(
  classDeclaration: ClassDeclaration,
  moduleName: string,
  { unique }: { unique: boolean } = { unique: false }
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName, {
    unique,
    forceToArray: true,
  });
}
