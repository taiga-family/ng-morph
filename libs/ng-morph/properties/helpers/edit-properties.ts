import {PropertyDeclaration, PropertyDeclarationStructure} from 'ts-morph';
import {getDeclarationEditor} from 'ng-morph/utils';

export const editProperties = getDeclarationEditor<
    PropertyDeclaration,
    PropertyDeclarationStructure
>();
