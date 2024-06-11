import type {ParameterDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editParams = getDeclarationEditor<ParameterDeclaration>();
