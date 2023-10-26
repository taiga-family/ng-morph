import {getDeclarationRemover} from 'ng-morph/utils';
import {InterfaceDeclaration} from 'ts-morph';

export const removeInterfaces = getDeclarationRemover<InterfaceDeclaration>();
