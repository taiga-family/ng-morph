import type {ClassDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getClasses = getDeclarationGetter<ClassDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getClasses())),
);
