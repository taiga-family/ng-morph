import {getDeclarationEditor} from 'ng-morph/utils';
import type {AccessorDeclaration} from 'ts-morph';

export const editAccessors = getDeclarationEditor<AccessorDeclaration>();
