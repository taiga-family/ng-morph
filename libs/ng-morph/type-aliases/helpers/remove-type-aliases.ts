import {getDeclarationRemover} from 'ng-morph/utils';
import type {TypeAliasDeclaration} from 'ts-morph';

export const removeTypeAliases = getDeclarationRemover<TypeAliasDeclaration>();
