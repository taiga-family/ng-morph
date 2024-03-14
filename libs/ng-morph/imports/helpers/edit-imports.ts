import {getDeclarationEditor} from 'ng-morph/utils';
import type {ImportDeclaration, ImportDeclarationStructure} from 'ts-morph';

export const editImports = getDeclarationEditor<
    ImportDeclaration,
    ImportDeclarationStructure & {namedImports: string[]}
>();
