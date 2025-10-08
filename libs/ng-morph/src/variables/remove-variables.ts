import {type VariableStatement} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeVariables = getDeclarationRemover<VariableStatement>();
