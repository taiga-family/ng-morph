import {arrayFlat, coerceArray, matchQuery, Query} from 'ng-morph/utils';
import {ClassDeclaration, MethodDeclaration, MethodDeclarationStructure} from 'ts-morph';

export function getMethods(
    classes: ClassDeclaration | ClassDeclaration[],
    query?: Query<MethodDeclarationStructure>,
): MethodDeclaration[] {
    return arrayFlat(coerceArray(classes).map(klass => klass.getMethods())).filter(
        method => !method.isOverload() && matchQuery(method.getStructure(), query),
    );
}
