import {getDeclarationCreator} from 'ng-morph/utils';
import type {
    FunctionDeclaration,
    FunctionDeclarationStructure,
    OptionalKind,
} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addFunctions = getDeclarationCreator<
    FunctionDeclaration,
    OptionalKind<FunctionDeclarationStructure>
>({kind: StructureKind.Function});
