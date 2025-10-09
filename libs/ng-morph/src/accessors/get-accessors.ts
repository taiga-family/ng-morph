import {
    type AccessorDeclaration,
    type ClassDeclaration,
    type GetAccessorDeclarationStructure,
    type SetAccessorDeclarationStructure,
} from 'ts-morph';

import {arrayFlat, coerceArray, matchQuery, type Query} from '../utils';

export function getAccessors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<GetAccessorDeclarationStructure | SetAccessorDeclarationStructure>,
): AccessorDeclaration[] {
    return arrayFlat(
        coerceArray(classes).map((klass) => [
            ...klass.getGetAccessors(),
            ...klass.getSetAccessors(),
        ]),
    ).filter((accessor) => matchQuery(accessor.getStructure(), query));
}
