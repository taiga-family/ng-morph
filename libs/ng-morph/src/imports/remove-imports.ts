import {type ImportDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeImports = getDeclarationRemover<ImportDeclaration>();
