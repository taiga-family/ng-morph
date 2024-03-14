import type {Query} from 'ng-morph/utils';
import {arrayFlat, coerceArray, matchQuery} from 'ng-morph/utils';
import type {
    ClassDeclaration,
    ConstructorDeclaration,
    ConstructorDeclarationStructure,
} from 'ts-morph';

export function getConstructors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<ConstructorDeclarationStructure>,
): ConstructorDeclaration[] {
    return arrayFlat(coerceArray(classes).map(klass => klass.getConstructors())).filter(
        constructor =>
            !constructor.isOverload() && matchQuery(constructor.getStructure(), query),
    );
}
