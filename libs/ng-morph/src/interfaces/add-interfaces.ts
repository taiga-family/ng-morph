import type {InterfaceDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addInterfaces = getDeclarationCreator<InterfaceDeclaration>({
    kind: StructureKind.Interface,
});
