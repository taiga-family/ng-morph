import type {EnumDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editEnums = getDeclarationEditor<EnumDeclaration>();
