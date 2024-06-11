import type {FunctionDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editFunctions = getDeclarationEditor<FunctionDeclaration>();
