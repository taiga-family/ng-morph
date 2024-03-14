import {getDeclarationRemover} from 'ng-morph/utils';
import type {MethodDeclaration} from 'ts-morph';

export const removeMethods = getDeclarationRemover<MethodDeclaration>();
