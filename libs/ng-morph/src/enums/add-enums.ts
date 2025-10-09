import {type EnumDeclaration, StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addEnums = getDeclarationCreator<EnumDeclaration>({
    kind: StructureKind.Enum,
});
