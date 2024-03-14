import {getDeclarationRemover} from 'ng-morph/utils';
import type {PropertyDeclaration} from 'ts-morph';

export const removeProperties = getDeclarationRemover<PropertyDeclaration>();
