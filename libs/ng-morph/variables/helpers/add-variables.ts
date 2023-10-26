import {getDeclarationCreator} from 'ng-morph/utils';
import {StructureKind, VariableStatement} from 'ts-morph';

export const addVariables = getDeclarationCreator<VariableStatement>({
    kind: StructureKind.VariableStatement,
});
