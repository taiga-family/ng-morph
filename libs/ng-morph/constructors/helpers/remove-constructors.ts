import {getDeclarationRemover} from 'ng-morph/utils';
import type {ConstructorDeclaration} from 'ts-morph';

export const removeConstructors = getDeclarationRemover<ConstructorDeclaration>();
