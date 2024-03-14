import {getDeclarationCreator} from 'ng-morph/utils';
import type {InterfaceDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addInterfaces = getDeclarationCreator<InterfaceDeclaration>({
    kind: StructureKind.Interface,
});
