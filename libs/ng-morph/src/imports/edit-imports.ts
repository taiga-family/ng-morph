import type {ImportDeclaration, ImportDeclarationStructure} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editImports = getDeclarationEditor<
    ImportDeclaration,
    ImportDeclarationStructure & {namedImports: string[]}
>();
