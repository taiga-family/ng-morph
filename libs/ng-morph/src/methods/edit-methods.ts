import type {MethodDeclaration, MethodDeclarationStructure} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editMethods = getDeclarationEditor<
    MethodDeclaration,
    MethodDeclarationStructure
>();
