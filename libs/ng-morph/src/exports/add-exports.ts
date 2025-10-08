import {type ExportDeclaration, StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addExports = getDeclarationCreator<ExportDeclaration>({
    kind: StructureKind.ExportDeclaration,
});
