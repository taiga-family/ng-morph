import {getDeclarationRemover} from 'ng-morph/utils';
import type {Decorator} from 'ts-morph';

export const removeDecorators = getDeclarationRemover<Decorator>();
