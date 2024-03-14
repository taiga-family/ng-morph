import {getDeclarationRemover} from 'ng-morph/utils';
import type {ImportDeclaration} from 'ts-morph';

export const removeImports = getDeclarationRemover<ImportDeclaration>();
