import {StructureKind, type VariableStatement} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addVariables = getDeclarationCreator<VariableStatement>({
    kind: StructureKind.VariableStatement,
});
