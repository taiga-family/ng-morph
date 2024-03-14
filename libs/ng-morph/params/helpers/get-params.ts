import type {Query} from 'ng-morph/utils';
import {arrayFlat, coerceArray, matchQuery} from 'ng-morph/utils';
import type {
    FunctionLikeDeclaration,
    ParameterDeclaration,
    ParameterDeclarationStructure,
} from 'ts-morph';

export function getParams(
    functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
    query?: Query<ParameterDeclarationStructure>,
): ParameterDeclaration[] {
    return arrayFlat(
        coerceArray(functionsLike).map(functionLike => functionLike.getParameters()),
    ).filter(param => matchQuery(param.getStructure(), query));
}
