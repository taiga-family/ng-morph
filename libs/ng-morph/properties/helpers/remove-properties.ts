import { getDeclarationRemover } from 'ng-morph/utils';
import { PropertyDeclaration } from 'ts-morph';

export const removeProperties = getDeclarationRemover<PropertyDeclaration>();
