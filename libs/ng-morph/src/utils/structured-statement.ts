import {type Node} from 'ts-morph';

import {type StructureType} from './structure-type';

export type StructuredStatement<Declaration> = Node & {
    set(structure: Partial<StructureType<Declaration>>): unknown;
    getStructure(): StructureType<Declaration>;
};
