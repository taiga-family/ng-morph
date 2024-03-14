import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import type {FunctionDeclaration, FunctionDeclarationStructure} from 'ts-morph';

export const getFunctions = getDeclarationGetter<
    FunctionDeclaration,
    FunctionDeclarationStructure
>(pattern => {
    const files = getSourceFiles(pattern);

    return arrayFlat(files.map(file => file.getFunctions())).filter(
        fn => !fn.isOverload(),
    );
});
