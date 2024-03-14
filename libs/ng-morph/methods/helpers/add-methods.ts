import {coerceArray} from 'ng-morph/utils';
import type {ClassDeclaration, MethodDeclarationStructure, OptionalKind} from 'ts-morph';

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
