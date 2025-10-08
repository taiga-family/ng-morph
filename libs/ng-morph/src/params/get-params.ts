import {
    type FunctionLikeDeclaration,
    type ParameterDeclaration,
    type ParameterDeclarationStructure,
} from 'ts-morph';

import {arrayFlat, coerceArray, matchQuery, type Query} from '../utils';

export function getParams(
    functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
    query?: Query<ParameterDeclarationStructure>,
): ParameterDeclaration[] {
    return arrayFlat(
        coerceArray(functionsLike).map((functionLike) => functionLike.getParameters()),
    ).filter((param) => matchQuery(param.getStructure(), query));
}
