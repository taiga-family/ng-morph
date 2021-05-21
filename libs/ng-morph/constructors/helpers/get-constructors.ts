import { arrayFlat, coerceArray, matchQuery, Query } from 'ng-morph/utils';
import {
  ClassDeclaration,
  ConstructorDeclaration,
  ConstructorDeclarationStructure,
} from 'ts-morph';

export function getConstructors(
  classes: ClassDeclaration | ClassDeclaration[],
  query?: Query<ConstructorDeclarationStructure>
): ConstructorDeclaration[] {
  return arrayFlat(
    coerceArray(classes).map((klass) => klass.getConstructors())
  ).filter(
    (constructor) =>
      !constructor.isOverload() && matchQuery(constructor.getStructure(), query)
  );
}
