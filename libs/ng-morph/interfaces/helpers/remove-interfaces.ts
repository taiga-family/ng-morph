import {getDeclarationRemover} from 'ng-morph/utils';
import type {InterfaceDeclaration} from 'ts-morph';

export const removeInterfaces = getDeclarationRemover<InterfaceDeclaration>();
