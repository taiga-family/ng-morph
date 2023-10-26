import {getDeclarationRemover} from 'ng-morph/utils';
import {FunctionDeclaration} from 'ts-morph';

export const removeFunctions = getDeclarationRemover<FunctionDeclaration>();
