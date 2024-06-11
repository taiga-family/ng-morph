import type {
    ClassDeclaration,
    MethodDeclaration,
    MethodDeclarationStructure,
} from 'ts-morph';

import type {Query} from '../utils';
import {arrayFlat, coerceArray, matchQuery} from '../utils';

export function getMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<MethodDeclarationStructure>,
): MethodDeclaration[] {
    return arrayFlat(coerceArray(classes).map(klass => klass.getMethods())).filter(
        method => !method.isOverload() && matchQuery(method.getStructure(), query),
    );
}
