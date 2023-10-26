import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import {ImportDeclaration} from 'ts-morph';

export const getImports = getDeclarationGetter<ImportDeclaration>(pattern => {
    const sourceFiles = getSourceFiles(pattern);

    return arrayFlat(sourceFiles.map(file => file.getImportDeclarations()));
});
