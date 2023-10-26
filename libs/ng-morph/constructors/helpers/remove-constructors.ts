import {getDeclarationRemover} from 'ng-morph/utils';
import {ConstructorDeclaration} from 'ts-morph';

export const removeConstructors = getDeclarationRemover<ConstructorDeclaration>();
