import {getDeclarationRemover} from 'ng-morph/utils';
import type {AccessorDeclaration} from 'ts-morph';

export const removeAccessors = getDeclarationRemover<AccessorDeclaration>();
