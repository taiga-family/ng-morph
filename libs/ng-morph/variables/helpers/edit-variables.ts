import {getDeclarationEditor} from 'ng-morph/utils';
import type {VariableStatement} from 'ts-morph';

export const editVariables = getDeclarationEditor<VariableStatement>();
