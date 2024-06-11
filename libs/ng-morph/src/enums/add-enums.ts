import type {EnumDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addEnums = getDeclarationCreator<EnumDeclaration>({
    kind: StructureKind.Enum,
});
