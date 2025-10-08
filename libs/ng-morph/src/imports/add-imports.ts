import {type ImportDeclaration, StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addImports = getDeclarationCreator<ImportDeclaration>(
    {kind: StructureKind.ImportDeclaration},
    {position: 0},
);
