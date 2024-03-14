import {getDeclarationEditor} from 'ng-morph/utils';
import type {FunctionDeclaration} from 'ts-morph';

export const editFunctions = getDeclarationEditor<FunctionDeclaration>();
