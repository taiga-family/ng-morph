import {type TypeAliasDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editTypeAliases = getDeclarationEditor<TypeAliasDeclaration>();
