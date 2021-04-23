import { ImportDeclaration, ImportDeclarationStructure } from 'ts-morph';
import { getDeclarationEditor } from 'ng-morph/utils';

export const editImports = getDeclarationEditor<
  ImportDeclaration,
  ImportDeclarationStructure & { namedImports: string[] }
>();
