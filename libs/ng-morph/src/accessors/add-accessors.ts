import {
    type ClassDeclaration,
    type GetAccessorDeclarationStructure,
    type SetAccessorDeclarationStructure,
    Structure,
} from 'ts-morph';

import {coerceArray} from '../utils';

export function addAccessors(
    classes: ClassDeclaration | ClassDeclaration[],
    accessors:
        | Array<GetAccessorDeclarationStructure | SetAccessorDeclarationStructure>
        | GetAccessorDeclarationStructure
        | SetAccessorDeclarationStructure,
): void {
    coerceArray(classes).forEach((declaration) => {
        coerceArray(accessors).forEach((accessor) => {
            if (Structure.isGetAccessor(accessor)) {
                declaration.addGetAccessor(accessor);
            } else {
                declaration.addSetAccessor(accessor);
            }
        });
    });
}
