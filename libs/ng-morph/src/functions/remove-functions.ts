import type {FunctionDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeFunctions = getDeclarationRemover<FunctionDeclaration>();
