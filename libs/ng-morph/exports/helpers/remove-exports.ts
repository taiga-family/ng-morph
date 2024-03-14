import {getDeclarationRemover} from 'ng-morph/utils';
import type {ExportDeclaration} from 'ts-morph';

export const removeExports = getDeclarationRemover<ExportDeclaration>();
