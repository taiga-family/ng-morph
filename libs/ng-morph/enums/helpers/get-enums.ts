import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import type {EnumDeclaration} from 'ts-morph';

export const getEnums = getDeclarationGetter<EnumDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getEnums())),
);
