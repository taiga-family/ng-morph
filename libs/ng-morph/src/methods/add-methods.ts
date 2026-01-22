import {
    type ClassDeclaration,
    type MethodDeclarationStructure,
    type OptionalKind,
} from 'ts-morph';

import {coerceArray} from '../utils';

export function addMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    methods:
        | Array<OptionalKind<MethodDeclarationStructure>>
        | OptionalKind<MethodDeclarationStructure>,
): void {
    coerceArray(classes).forEach((declaration) => {
        declaration.addMethods(coerceArray(methods));
    });
}
