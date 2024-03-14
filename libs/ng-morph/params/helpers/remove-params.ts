import {getDeclarationRemover} from 'ng-morph/utils';
import type {ParameterDeclaration} from 'ts-morph';

export const removeParams = getDeclarationRemover<ParameterDeclaration>();
