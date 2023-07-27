import { arrayFlat, coerceArray, matchQuery, Query } from 'ng-morph/utils';
import { ClassDeclaration, PropertyDeclaration, PropertyDeclarationStructure, } from 'ts-morph';

export function getProperties<T extends ClassDeclaration>(
  classes: T | T[],
  query?: Query<PropertyDeclarationStructure>
): PropertyDeclaration[] {
  return arrayFlat(
    coerceArray(classes).map((klass) => klass.getProperties())
  ).filter((method) => matchQuery(method.getStructure(), query));
}
