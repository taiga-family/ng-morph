import {getDeclarationEditor} from 'ng-morph/utils';
import type {ConstructorDeclaration} from 'ts-morph';

export const editConstructors = getDeclarationEditor<ConstructorDeclaration>();
