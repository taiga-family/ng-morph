import {getDeclarationEditor} from 'ng-morph/utils';
import type {PropertyDeclaration, PropertyDeclarationStructure} from 'ts-morph';

export const editProperties = getDeclarationEditor<
    PropertyDeclaration,
    PropertyDeclarationStructure
>();
