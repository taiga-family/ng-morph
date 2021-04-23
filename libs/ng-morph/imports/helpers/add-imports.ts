import { getDeclarationCreator } from 'ng-morph/utils';
import { ImportDeclaration, StructureKind } from 'ts-morph';

export const addImports = getDeclarationCreator<ImportDeclaration>(
  { kind: StructureKind.ImportDeclaration },
  { position: 0 }
);
