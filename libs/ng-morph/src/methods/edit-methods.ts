import {type MethodDeclaration, type MethodDeclarationStructure} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editMethods = getDeclarationEditor<
    MethodDeclaration,
    MethodDeclarationStructure
>();
