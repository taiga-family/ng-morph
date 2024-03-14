import {getDeclarationEditor} from 'ng-morph/utils';
import type {TypeAliasDeclaration} from 'ts-morph';

export const editTypeAliases = getDeclarationEditor<TypeAliasDeclaration>();
