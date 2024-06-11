import type {ClassDeclaration} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editClasses = getDeclarationEditor<ClassDeclaration>();
