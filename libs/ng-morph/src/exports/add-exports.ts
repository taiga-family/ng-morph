import type {ExportDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addExports = getDeclarationCreator<ExportDeclaration>({
    kind: StructureKind.ExportDeclaration,
});
