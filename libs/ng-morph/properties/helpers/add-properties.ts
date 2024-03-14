import {coerceArray} from 'ng-morph/utils';
import type {
    ClassDeclaration,
    OptionalKind,
    PropertyDeclarationStructure,
} from 'ts-morph';

export function addProperties(
    classes: ClassDeclaration | ClassDeclaration[],
    properties:
        | Array<OptionalKind<PropertyDeclarationStructure>>
        | OptionalKind<PropertyDeclarationStructure>,
): void {
    coerceArray(classes).forEach(klass => {
        klass.addProperties(coerceArray(properties));
    });
}
