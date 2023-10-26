import {MethodDeclaration, MethodDeclarationStructure} from 'ts-morph';
import {getDeclarationEditor} from 'ng-morph/utils';

export const editMethods = getDeclarationEditor<
    MethodDeclaration,
    MethodDeclarationStructure
>();
