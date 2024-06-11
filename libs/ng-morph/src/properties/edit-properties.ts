import type {PropertyDeclaration, PropertyDeclarationStructure} from 'ts-morph';

import {getDeclarationEditor} from '../utils';

export const editProperties = getDeclarationEditor<
    PropertyDeclaration,
    PropertyDeclarationStructure
>();
