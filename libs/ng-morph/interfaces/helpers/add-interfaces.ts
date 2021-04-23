import { getDeclarationCreator } from 'ng-morph/utils';
import { InterfaceDeclaration, StructureKind } from 'ts-morph';

export const addInterfaces = getDeclarationCreator<InterfaceDeclaration>({
  kind: StructureKind.Interface,
});
