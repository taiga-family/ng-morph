import {type ClassDeclaration, StructureKind} from 'ts-morph';

import {getDeclarationCreator} from '../utils';

export const addClasses = getDeclarationCreator<ClassDeclaration>({
    kind: StructureKind.Class,
});
