import {getDeclarationCreator} from 'ng-morph/utils';
import type {VariableStatement} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addVariables = getDeclarationCreator<VariableStatement>({
    kind: StructureKind.VariableStatement,
});
