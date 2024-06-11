import type {ExportDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getExports = getDeclarationGetter<ExportDeclaration>(pattern => {
    const sourceFiles = getSourceFiles(pattern);

    return arrayFlat(sourceFiles.map(file => file.getExportDeclarations()));
});
