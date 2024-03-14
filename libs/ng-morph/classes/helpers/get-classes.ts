import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import type {ClassDeclaration} from 'ts-morph';

export const getClasses = getDeclarationGetter<ClassDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getClasses())),
);
