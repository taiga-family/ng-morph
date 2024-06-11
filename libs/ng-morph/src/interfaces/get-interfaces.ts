import type {InterfaceDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getInterfaces = getDeclarationGetter<InterfaceDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getInterfaces())),
);
