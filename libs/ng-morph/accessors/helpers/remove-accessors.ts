import {getDeclarationRemover} from 'ng-morph/utils';
import {AccessorDeclaration} from 'ts-morph';

export const removeAccessors = getDeclarationRemover<AccessorDeclaration>();
