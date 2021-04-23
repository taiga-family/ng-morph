import { getDeclarationRemover } from 'ng-morph/utils';
import { VariableStatement } from 'ts-morph';

export const removeVariables = getDeclarationRemover<VariableStatement>();
