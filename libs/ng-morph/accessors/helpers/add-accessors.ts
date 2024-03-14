import {coerceArray} from 'ng-morph/utils';
import type {
    ClassDeclaration,
    GetAccessorDeclarationStructure,
    SetAccessorDeclarationStructure,
} from 'ts-morph';
import {Structure} from 'ts-morph';

export function addAccessors(
    classes: ClassDeclaration | ClassDeclaration[],
    accessors:
        | Array<GetAccessorDeclarationStructure | SetAccessorDeclarationStructure>
        | GetAccessorDeclarationStructure
        | SetAccessorDeclarationStructure,
): void {
    coerceArray(classes).forEach(klass => {
        coerceArray(accessors).forEach(accessor => {
            if (Structure.isGetAccessor(accessor)) {
                klass.addGetAccessor(accessor);
            } else {
                klass.addSetAccessor(accessor);
            }
        });
    });
}
