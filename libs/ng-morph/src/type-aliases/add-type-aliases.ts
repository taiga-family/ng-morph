import type {TypeAliasDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addTypeAliases = getDeclarationCreator<TypeAliasDeclaration>({
    kind: StructureKind.TypeAlias,
});
