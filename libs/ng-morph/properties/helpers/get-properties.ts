import type {Query} from 'ng-morph/utils';
import {arrayFlat, coerceArray, matchQuery} from 'ng-morph/utils';
import type {
    ClassDeclaration,
    PropertyDeclaration,
    PropertyDeclarationStructure,
} from 'ts-morph';

export function getProperties<T extends ClassDeclaration>(
    classes: T | T[],
    query?: Query<PropertyDeclarationStructure>,
): PropertyDeclaration[] {
    return arrayFlat(coerceArray(classes).map(klass => klass.getProperties())).filter(
        method => matchQuery(method.getStructure(), query),
    );
}
