import { ClassDeclaration } from 'ts-morph';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToComponent(
  classDeclaration: ClassDeclaration,
  importName: string,
  { unique = false }: { unique?: boolean } = {}
) {
  pushToArrayProperty(classDeclaration, 'Component', 'imports', importName, {
    unique,
    forceToArray: true,
  });
}
