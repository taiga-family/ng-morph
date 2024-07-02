import type {
    ClassDeclaration,
    ConstructorDeclaration,
    ConstructorDeclarationStructure,
} from 'ts-morph';

import type {Query} from '../utils';
import {arrayFlat, coerceArray, matchQuery} from '../utils';

export function getConstructors(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<ConstructorDeclarationStructure>,
): ConstructorDeclaration[] {
    return arrayFlat(coerceArray(classes).map((klass) => klass.getConstructors())).filter(
        (constructor) =>
            !constructor.isOverload() && matchQuery(constructor.getStructure(), query),
    );
}
