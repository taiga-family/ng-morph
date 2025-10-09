import {type FunctionDeclaration, type FunctionDeclarationStructure} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getFunctions = getDeclarationGetter<
    FunctionDeclaration,
    FunctionDeclarationStructure
>((pattern) => {
    const files = getSourceFiles(pattern);

    return arrayFlat(files.map((file) => file.getFunctions())).filter(
        (fn) => !fn.isOverload(),
    );
});
