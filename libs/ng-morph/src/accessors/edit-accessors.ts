import type {AccessorDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editAccessors = getDeclarationEditor<AccessorDeclaration>();
