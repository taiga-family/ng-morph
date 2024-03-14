import {getDeclarationCreator} from 'ng-morph/utils';
import type {ExportDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addExports = getDeclarationCreator<ExportDeclaration>({
    kind: StructureKind.ExportDeclaration,
});
