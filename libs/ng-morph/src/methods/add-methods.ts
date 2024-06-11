import type {ClassDeclaration, MethodDeclarationStructure, OptionalKind} from 'ts-morph';

import {coerceArray} from '../utils';

export function addMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    methods:
        | Array<OptionalKind<MethodDeclarationStructure>>
        | OptionalKind<MethodDeclarationStructure>,
): void {
    coerceArray(classes).forEach(klass => {
        klass.addMethods(coerceArray(methods));
    });
}
