import { coerceArray, StructureEditor } from 'ng-morph/utils';
import { Node, OptionalKind, Structure } from 'ts-morph';
import { StructuredStatement } from '../types/structured-statement';
import { StructureType } from 'ng-morph/utils/types/structure-type';

export function getDeclarationEditor<
  Declaration extends StructuredStatement<Declaration>,
  Structures extends StructureType<Declaration> = StructureType<Declaration>
>() {
  return function editDeclarations(
    declarations: Declaration | Declaration[],
    editor: StructureEditor<Declaration, OptionalKind<Structures>>
  ) {
    coerceArray(declarations).forEach((declaration) => {
      const newStructure: Structures = Object.assign(
        declaration.getStructure(),
        editor(declaration.getStructure(), declaration)
      );

      // todo: see https://github.com/dsherret/ts-morph/issues/882
      // if the issue is resolved code will be remove
      if (
        Structure.hasName(newStructure) &&
        Node.isRenameableNode(declaration)
      ) {
        declaration.rename(newStructure.name);
        delete newStructure.name;
      }

      declaration.set(newStructure);
    });
  };
}
