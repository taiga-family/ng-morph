import type {ConstructorDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editConstructors = getDeclarationEditor<ConstructorDeclaration>();
