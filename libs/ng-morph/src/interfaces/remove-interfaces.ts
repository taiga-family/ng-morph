import type {InterfaceDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeInterfaces = getDeclarationRemover<InterfaceDeclaration>();
