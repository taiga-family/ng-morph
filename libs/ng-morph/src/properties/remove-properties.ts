import type {PropertyDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeProperties = getDeclarationRemover<PropertyDeclaration>();
