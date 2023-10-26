import {arrayFlat, coerceArray, matchQuery, Query} from 'ng-morph/utils';
import {
    AccessorDeclaration,
    ClassDeclaration,
    GetAccessorDeclarationStructure,
    SetAccessorDeclarationStructure,
} from 'ts-morph';

export function getAccessors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<SetAccessorDeclarationStructure | GetAccessorDeclarationStructure>,
): AccessorDeclaration[] {
    return arrayFlat(
        coerceArray(classes).map(klass => [
            ...klass.getGetAccessors(),
            ...klass.getSetAccessors(),
        ]),
    ).filter(accessor => matchQuery(accessor.getStructure(), query));
}
