import type {ClassDeclaration} from 'ts-morph';

import {getDeclarationRemover} from '../utils';

export const removeClasses = getDeclarationRemover<ClassDeclaration>();
