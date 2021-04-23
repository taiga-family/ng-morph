import { getSourceFiles } from 'ng-morph/source-file';
import { arrayFlat, getDeclarationGetter } from 'ng-morph/utils';
import { VariableStatement } from 'ts-morph';

export const getVariables = getDeclarationGetter<VariableStatement>((pattern) =>
  arrayFlat(getSourceFiles(pattern).map((file) => file.getVariableStatements()))
);
