import {
    type ClassDeclaration,
    type MethodDeclaration,
    type MethodDeclarationStructure,
} from 'ts-morph';

import {arrayFlat, coerceArray, matchQuery, type Query} from '../utils';

export function getMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<MethodDeclarationStructure>,
): MethodDeclaration[] {
    return arrayFlat(coerceArray(classes).map((klass) => klass.getMethods())).filter(
        (method) => !method.isOverload() && matchQuery(method.getStructure(), query),
    );
}
