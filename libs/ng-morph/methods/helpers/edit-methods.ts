import {getDeclarationEditor} from 'ng-morph/utils';
import type {MethodDeclaration, MethodDeclarationStructure} from 'ts-morph';

export const editMethods = getDeclarationEditor<
    MethodDeclaration,
    MethodDeclarationStructure
>();
