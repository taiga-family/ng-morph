import { coerceArray } from 'ng-morph/utils';
import {
  ClassDeclaration,
  GetAccessorDeclarationStructure,
  SetAccessorDeclarationStructure,
  Structure,
} from 'ts-morph';

export function addAccessors(
  classes: ClassDeclaration | ClassDeclaration[],
  accessors:
    | GetAccessorDeclarationStructure
    | SetAccessorDeclarationStructure
    | Array<GetAccessorDeclarationStructure | SetAccessorDeclarationStructure>,
): void {
  coerceArray(classes).forEach((klass) => {
    for (const accessor of coerceArray(accessors)) {
      if (Structure.isGetAccessor(accessor)) {
        klass.addGetAccessor(accessor);
      } else {
        klass.addSetAccessor(accessor);
      }
    }
  });
}
