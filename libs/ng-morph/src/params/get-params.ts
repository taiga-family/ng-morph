import type {
    FunctionLikeDeclaration,
    ParameterDeclaration,
    ParameterDeclarationStructure,
} from 'ts-morph';

import type {Query} from '../utils';
import {arrayFlat, coerceArray, matchQuery} from '../utils';

export function getParams(
    functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
    query?: Query<ParameterDeclarationStructure>,
): ParameterDeclaration[] {
    return arrayFlat(
        coerceArray(functionsLike).map(functionLike => functionLike.getParameters()),
    ).filter(param => matchQuery(param.getStructure(), query));
}
