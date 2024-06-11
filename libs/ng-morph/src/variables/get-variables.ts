import type {VariableStatement} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getVariables = getDeclarationGetter<VariableStatement>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getVariableStatements())),
);
