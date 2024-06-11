import type {ConstructorDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeConstructors = getDeclarationRemover<ConstructorDeclaration>();
