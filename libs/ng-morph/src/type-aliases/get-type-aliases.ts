import type {TypeAliasDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getTypeAliases = getDeclarationGetter<TypeAliasDeclaration>(pattern =>
    arrayFlat(getSourceFiles(pattern).map(file => file.getTypeAliases())),
);
