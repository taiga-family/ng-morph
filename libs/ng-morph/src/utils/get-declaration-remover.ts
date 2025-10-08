import {coerceArray} from './coerce-array';

export function getDeclarationRemover<T extends {remove(): void} = {remove(): void}>(): (
    declarations: T | T[],
) => void {
    return function removeDeclarations(declarations: T | T[]) {
        coerceArray(declarations).forEach((declaration) => {
            declaration.remove();
        });
    };
}

export const removeDeclarations = getDeclarationRemover();
