import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToNgModule(
  classDeclaration: ClassDeclaration,
  moduleName: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName, {
    unique,
    forceToArray: true,
  });
}
