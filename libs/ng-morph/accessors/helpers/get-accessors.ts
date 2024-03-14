import type {Query} from 'ng-morph/utils';
import {arrayFlat, coerceArray, matchQuery} from 'ng-morph/utils';
import type {
    AccessorDeclaration,
    ClassDeclaration,
    GetAccessorDeclarationStructure,
    SetAccessorDeclarationStructure,
} from 'ts-morph';

export function getAccessors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<GetAccessorDeclarationStructure | SetAccessorDeclarationStructure>,
): AccessorDeclaration[] {
    return arrayFlat(
        coerceArray(classes).map(klass => [
            ...klass.getGetAccessors(),
            ...klass.getSetAccessors(),
        ]),
    ).filter(accessor => matchQuery(accessor.getStructure(), query));
}
