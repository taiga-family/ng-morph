import {getDeclarationRemover} from 'ng-morph/utils';
import {MethodDeclaration} from 'ts-morph';

export const removeMethods = getDeclarationRemover<MethodDeclaration>();
