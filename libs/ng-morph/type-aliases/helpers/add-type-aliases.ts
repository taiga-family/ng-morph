import { getDeclarationCreator } from 'ng-morph/utils';
import { TypeAliasDeclaration, StructureKind } from 'ts-morph';

export const addTypeAliases = getDeclarationCreator<TypeAliasDeclaration>({
  kind: StructureKind.TypeAlias,
});
