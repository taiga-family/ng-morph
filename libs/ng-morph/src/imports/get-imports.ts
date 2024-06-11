import type {ImportDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getImports = getDeclarationGetter<ImportDeclaration>(pattern => {
    const sourceFiles = getSourceFiles(pattern);

    return arrayFlat(sourceFiles.map(file => file.getImportDeclarations()));
});
