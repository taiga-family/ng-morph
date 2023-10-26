import {getDeclarationCreator} from 'ng-morph/utils';
import {ExportDeclaration, StructureKind} from 'ts-morph';

export const addExports = getDeclarationCreator<ExportDeclaration>({
    kind: StructureKind.ExportDeclaration,
});
