import type {OptionalKind, StatementStructures, StructureKind} from 'ts-morph';

import {getSourceFiles} from '../source-file';
import {coerceArray} from './coerce-array';
import type {Pattern} from './pattern';
import type {StructureType} from './structure-type';
import type {StructuredStatement} from './structured-statement';

export function getDeclarationCreator<
    Declaration extends StructuredStatement<Declaration>,
    Structure extends OptionalKind<StructureType<Declaration>> = OptionalKind<
        StructureType<Declaration>
    >,
    CommonStructure extends Partial<Structure> & {
        kind: StructureKind;
    } = Partial<Structure> & {
        kind: StructureKind;
    },
>(common: CommonStructure, {position = null}: {position?: number} = {}) {
    return function addDeclarations(
        pattern: Pattern,
        structures: Structure | Structure[],
    ) {
        const files = getSourceFiles(pattern);

        files.forEach((file) => {
            const structuresWithKind = coerceArray(structures).map((structure) => ({
                ...common,
                ...structure,
            })) as StatementStructures[];

            if (position === null && typeof position !== 'number') {
                file.addStatements(structuresWithKind);
            } else {
                file.insertStatements(position, structuresWithKind);
            }
        });
    };
}
