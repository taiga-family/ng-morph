import {getSourceFiles} from 'ng-morph/source-file';
import {arrayFlat, getDeclarationGetter} from 'ng-morph/utils';
import {InterfaceDeclaration} from 'ts-morph';

export const getInterfaces = getDeclarationGetter<InterfaceDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getInterfaces())),
);
