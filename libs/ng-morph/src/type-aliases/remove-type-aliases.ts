import {type TypeAliasDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeTypeAliases = getDeclarationRemover<TypeAliasDeclaration>();
