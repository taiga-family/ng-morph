import { coerceArray } from 'ng-morph/utils';
import { FunctionLikeDeclaration, OptionalKind, ParameterDeclarationStructure, } from 'ts-morph';

export function addParams(
  functionsLike: FunctionLikeDeclaration | FunctionLikeDeclaration[],
  params:
    | OptionalKind<ParameterDeclarationStructure>
    | OptionalKind<ParameterDeclarationStructure>[]
): void {
  coerceArray(functionsLike).forEach((functionLike) => {
    functionLike.addParameters(coerceArray(params));
  });
}
