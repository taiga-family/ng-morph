import { getDeclarationRemover } from 'ng-morph/utils';
import { ClassDeclaration } from 'ts-morph';

export const removeClasses = getDeclarationRemover<ClassDeclaration>();
