import { getDeclarationRemover } from 'ng-morph/utils';
import { EnumDeclaration } from 'ts-morph';

export const removeEnums = getDeclarationRemover<EnumDeclaration>();
