import {getDeclarationEditor} from 'ng-morph/utils';
import type {ExportDeclaration, ExportDeclarationStructure} from 'ts-morph';

export const editExports = getDeclarationEditor<
    ExportDeclaration,
    ExportDeclarationStructure & {namedExports: string[]}
>();
