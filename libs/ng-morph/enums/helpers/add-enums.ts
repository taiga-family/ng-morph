import {getDeclarationCreator} from 'ng-morph/utils';
import type {EnumDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addEnums = getDeclarationCreator<EnumDeclaration>({
    kind: StructureKind.Enum,
});
