import {type ExportDeclaration, type ExportDeclarationStructure} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editExports = getDeclarationEditor<
    ExportDeclaration,
    ExportDeclarationStructure & {namedExports: string[]}
>();
