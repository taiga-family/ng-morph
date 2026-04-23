import {Node, type OptionalKind, Structure} from 'ts-morph';

import {coerceArray} from './coerce-array';
import {type StructureEditor} from './structure-editor';
import {type StructureType} from './structure-type';
import {type StructuredStatement} from './structured-statement';

export function getDeclarationEditor<
    Declaration extends StructuredStatement<Declaration>,
    Structures extends StructureType<Declaration> = StructureType<Declaration>,
>() {
    return function editDeclarations(
        declarations: Declaration | Declaration[],
        editor: StructureEditor<Declaration, OptionalKind<Structures>>,
    ) {
        coerceArray(declarations).forEach((declaration) => {
            const structure =
                declaration.getStructure() as unknown as OptionalKind<Structures>;
            const newStructure = Object.assign(
                structure,
                editor(structure, declaration),
            ) as Structures;

            if (Structure.hasName(newStructure) && Node.isRenameable(declaration)) {
                declaration.rename(newStructure.name);
                delete (newStructure as {name?: string}).name;
            }

            declaration.set(newStructure);
        });
    };
}
