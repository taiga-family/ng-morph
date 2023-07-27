import { getDeclarationCreator } from 'ng-morph/utils';
import { StructureKind, TypeAliasDeclaration } from 'ts-morph';

export const addTypeAliases = getDeclarationCreator<TypeAliasDeclaration>({
  kind: StructureKind.TypeAlias,
});
