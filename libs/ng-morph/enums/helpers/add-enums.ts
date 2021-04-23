import { getDeclarationCreator } from 'ng-morph/utils';
import { EnumDeclaration, StructureKind } from 'ts-morph';

export const addEnums = getDeclarationCreator<EnumDeclaration>({
  kind: StructureKind.Enum,
});
