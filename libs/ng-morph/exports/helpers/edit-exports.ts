import { ExportDeclaration, ExportDeclarationStructure } from 'ts-morph';
import { getDeclarationEditor } from 'ng-morph/utils';

export const editExports = getDeclarationEditor<
  ExportDeclaration,
  ExportDeclarationStructure & { namedExports: string[] }
>();
