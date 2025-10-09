import {
    type ClassDeclaration,
    type OptionalKind,
    type PropertyDeclarationStructure,
} from 'ts-morph';

import {coerceArray} from '../utils';

export function addProperties(
    classes: ClassDeclaration | ClassDeclaration[],
    properties:
        | Array<OptionalKind<PropertyDeclarationStructure>>
        | OptionalKind<PropertyDeclarationStructure>,
): void {
    coerceArray(classes).forEach((klass) => {
        klass.addProperties(coerceArray(properties));
    });
}
