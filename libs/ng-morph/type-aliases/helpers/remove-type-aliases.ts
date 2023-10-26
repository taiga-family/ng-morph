import {getDeclarationRemover} from 'ng-morph/utils';
import {TypeAliasDeclaration} from 'ts-morph';

export const removeTypeAliases = getDeclarationRemover<TypeAliasDeclaration>();
