import type {EnumDeclaration} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {arrayFlat, getDeclarationGetter} from '../utils';

export const getEnums = getDeclarationGetter<EnumDeclaration>((pattern) =>
    arrayFlat(getSourceFiles(pattern).map((file) => file.getEnums())),
);
