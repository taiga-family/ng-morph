import {getDeclarationRemover} from 'ng-morph/utils';
import type {VariableStatement} from 'ts-morph';

export const removeVariables = getDeclarationRemover<VariableStatement>();
