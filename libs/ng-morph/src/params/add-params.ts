import {
    type FunctionLikeDeclaration,
    type OptionalKind,
    type ParameterDeclarationStructure,
} from 'ts-morph';

import {coerceArray} from '../utils';

export function addParams(
    functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
    params:
        | Array<OptionalKind<ParameterDeclarationStructure>>
        | OptionalKind<ParameterDeclarationStructure>,
): void {
    coerceArray(functionsLike).forEach((functionLike) => {
        functionLike.addParameters(coerceArray(params));
    });
}
