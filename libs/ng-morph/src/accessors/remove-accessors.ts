import type {AccessorDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeAccessors = getDeclarationRemover<AccessorDeclaration>();
