import { getDeclarationRemover } from 'ng-morph/utils';
import { Decorator } from 'ts-morph';

export const removeDecorators = getDeclarationRemover<Decorator>();
