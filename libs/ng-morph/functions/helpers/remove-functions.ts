import {getDeclarationRemover} from 'ng-morph/utils';
import type {FunctionDeclaration} from 'ts-morph';

export const removeFunctions = getDeclarationRemover<FunctionDeclaration>();
