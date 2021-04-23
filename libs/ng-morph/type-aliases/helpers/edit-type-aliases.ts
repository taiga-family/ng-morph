import { TypeAliasDeclaration } from 'ts-morph';
import { getDeclarationEditor } from 'ng-morph/utils';

export const editTypeAliases = getDeclarationEditor<TypeAliasDeclaration>();
