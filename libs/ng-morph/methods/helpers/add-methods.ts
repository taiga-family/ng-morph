import {ClassDeclaration, MethodDeclarationStructure, OptionalKind} from 'ts-morph';
import {coerceArray} from 'ng-morph/utils';

export function addMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    methods:
        | OptionalKind<MethodDeclarationStructure>
        | OptionalKind<MethodDeclarationStructure>[],
) {
    coerceArray(classes).forEach(klass => {
        klass.addMethods(coerceArray(methods));
    });
}
