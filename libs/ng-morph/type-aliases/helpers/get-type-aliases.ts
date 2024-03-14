import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import type {TypeAliasDeclaration} from 'ts-morph';

export const getTypeAliases = getDeclarationGetter<TypeAliasDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getTypeAliases())),
);
