import { arrayFlat, coerceArray, matchQuery, Query } from 'ng-morph/utils';
import { FunctionLikeDeclaration, ParameterDeclaration, ParameterDeclarationStructure, } from 'ts-morph';

export function getParams(
  functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
  query?: Query<ParameterDeclarationStructure>
): ParameterDeclaration[] {
  return arrayFlat(
    coerceArray(functionsLike).map((functionLike) =>
      functionLike.getParameters()
    )
  ).filter((param) => matchQuery(param.getStructure(), query));
}
