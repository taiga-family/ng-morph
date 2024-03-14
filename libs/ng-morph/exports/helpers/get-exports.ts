import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import type {ExportDeclaration} from 'ts-morph';

export const getExports = getDeclarationGetter<ExportDeclaration>(pattern => {
    const sourceFiles = getSourceFiles(pattern);

    return arrayFlat(sourceFiles.map(file => file.getExportDeclarations()));
});
