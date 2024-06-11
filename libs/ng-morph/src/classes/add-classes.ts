import type {ClassDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addClasses = getDeclarationCreator<ClassDeclaration>({
    kind: StructureKind.Class,
});
