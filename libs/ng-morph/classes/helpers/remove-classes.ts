import {getDeclarationRemover} from 'ng-morph/utils';
import type {ClassDeclaration} from 'ts-morph';

export const removeClasses = getDeclarationRemover<ClassDeclaration>();
