import {getDeclarationEditor} from 'ng-morph/utils';
import type {ClassDeclaration} from 'ts-morph';

export const editClasses = getDeclarationEditor<ClassDeclaration>();
