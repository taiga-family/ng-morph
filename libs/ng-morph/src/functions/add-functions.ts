import type {
    FunctionDeclaration,
    FunctionDeclarationStructure,
    OptionalKind,
} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addFunctions = getDeclarationCreator<
    FunctionDeclaration,
    OptionalKind<FunctionDeclarationStructure>
>({kind: StructureKind.Function});
