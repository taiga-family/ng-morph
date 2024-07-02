import type {
    ClassDeclaration,
    PropertyDeclaration,
    PropertyDeclarationStructure,
} from 'ts-morph';

import type {Query} from '../utils';
import {arrayFlat, coerceArray, matchQuery} from '../utils';

export function getProperties<T extends ClassDeclaration>(
    classes: T | T[],
    query?: Query<PropertyDeclarationStructure>,
): PropertyDeclaration[] {
    return arrayFlat(coerceArray(classes).map((klass) => klass.getProperties())).filter(
        (method) => matchQuery(method.getStructure(), query),
    );
}
