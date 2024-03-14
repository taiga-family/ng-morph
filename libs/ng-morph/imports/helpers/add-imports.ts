import {getDeclarationCreator} from 'ng-morph/utils';
import type {ImportDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addImports = getDeclarationCreator<ImportDeclaration>(
    {kind: StructureKind.ImportDeclaration},
    {position: 0},
);
