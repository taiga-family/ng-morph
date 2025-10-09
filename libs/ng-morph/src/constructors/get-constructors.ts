import {
    type ClassDeclaration,
    type ConstructorDeclaration,
    type ConstructorDeclarationStructure,
} from 'ts-morph';

import {arrayFlat, coerceArray, matchQuery, type Query} from '../utils';

export function getConstructors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<ConstructorDeclarationStructure>,
): ConstructorDeclaration[] {
    return arrayFlat(coerceArray(classes).map((klass) => klass.getConstructors())).filter(
        (constructor) =>
            !constructor.isOverload() && matchQuery(constructor.getStructure(), query),
    );
}
