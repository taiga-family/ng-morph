import type {VariableStatement} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editVariables = getDeclarationEditor<VariableStatement>();
