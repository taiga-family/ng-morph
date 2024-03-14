import {getDeclarationCreator} from 'ng-morph/utils';
import type {TypeAliasDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addTypeAliases = getDeclarationCreator<TypeAliasDeclaration>({
    kind: StructureKind.TypeAlias,
});
