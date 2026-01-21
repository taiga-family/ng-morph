import {
    type ClassDeclaration,
    type ConstructorDeclarationStructure,
    type OptionalKind,
} from 'ts-morph';

import {coerceArray} from '../utils';

export function addConstructors(
    classes: ClassDeclaration | ClassDeclaration[],
    constructors:
        | Array<OptionalKind<ConstructorDeclarationStructure>>
        | OptionalKind<ConstructorDeclarationStructure>,
): void {
    coerceArray(classes).forEach((declaration) => {
        declaration.addConstructors(coerceArray(constructors));
    });
}
