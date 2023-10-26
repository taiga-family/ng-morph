import {coerceArray} from 'ng-morph/utils';
import {ClassDeclaration, ConstructorDeclarationStructure, OptionalKind} from 'ts-morph';

export function addConstructors(
    classes: ClassDeclaration | ClassDeclaration[],
    constructors:
        | OptionalKind<ConstructorDeclarationStructure>
        | OptionalKind<ConstructorDeclarationStructure>[],
): void {
    coerceArray(classes).forEach(klass => {
        klass.addConstructors(coerceArray(constructors));
    });
}
