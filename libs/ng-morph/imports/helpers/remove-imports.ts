import {ImportDeclaration} from 'ts-morph';
import {getDeclarationRemover} from 'ng-morph/utils';

export const removeImports = getDeclarationRemover<ImportDeclaration>();
