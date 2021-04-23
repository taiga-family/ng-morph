import { getDeclarationRemover } from 'ng-morph/utils';
import { ParameterDeclaration } from 'ts-morph';

export const removeParams = getDeclarationRemover<ParameterDeclaration>();
