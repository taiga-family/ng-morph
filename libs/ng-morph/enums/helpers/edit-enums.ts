import {getDeclarationEditor} from 'ng-morph/utils';
import type {EnumDeclaration} from 'ts-morph';

export const editEnums = getDeclarationEditor<EnumDeclaration>();
