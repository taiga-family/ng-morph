import {
    type ClassDeclaration,
    type PropertyDeclaration,
    type PropertyDeclarationStructure,
} from 'ts-morph';

import {arrayFlat, coerceArray, matchQuery, type Query} from '../utils';

export function getProperties<T extends ClassDeclaration>(
    classes: T | T[],
    query?: Query<PropertyDeclarationStructure>,
): PropertyDeclaration[] {
    return arrayFlat(coerceArray(classes).map((klass) => klass.getProperties())).filter(
        (method) => matchQuery(method.getStructure(), query),
    );
}
