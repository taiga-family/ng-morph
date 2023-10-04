import {
  ClassDeclaration,
  OptionalKind,
  PropertyDeclarationStructure,
} from 'ts-morph';
import { coerceArray } from 'ng-morph/utils';

export function addProperties(
  classes: ClassDeclaration | ClassDeclaration[],
  properties:
    | OptionalKind<PropertyDeclarationStructure>
    | OptionalKind<PropertyDeclarationStructure>[],
) {
  coerceArray(classes).forEach((klass) => {
    klass.addProperties(coerceArray(properties));
  });
}
