import {
    type FunctionDeclaration,
    type FunctionDeclarationStructure,
    type OptionalKind,
    StructureKind,
} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addFunctions = getDeclarationCreator<
    FunctionDeclaration,
    OptionalKind<FunctionDeclarationStructure>
>({kind: StructureKind.Function});
