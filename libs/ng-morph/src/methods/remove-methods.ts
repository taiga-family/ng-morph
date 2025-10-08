import {type MethodDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeMethods = getDeclarationRemover<MethodDeclaration>();
