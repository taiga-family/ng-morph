import {type ExportDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeExports = getDeclarationRemover<ExportDeclaration>();
