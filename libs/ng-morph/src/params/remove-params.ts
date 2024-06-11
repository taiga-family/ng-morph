import type {ParameterDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeParams = getDeclarationRemover<ParameterDeclaration>();
