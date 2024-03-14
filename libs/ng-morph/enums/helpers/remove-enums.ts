import {getDeclarationRemover} from 'ng-morph/utils';
import type {EnumDeclaration} from 'ts-morph';

export const removeEnums = getDeclarationRemover<EnumDeclaration>();
