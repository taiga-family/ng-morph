import type {EnumDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeEnums = getDeclarationRemover<EnumDeclaration>();
