import {getSourceFiles} from 'ng-morph/source-file';
import type {StructuredStatement} from 'ng-morph/utils/types/structured-statement';
import type {OptionalKind, StatementStructures, StructureKind} from 'ts-morph';

import type {Pattern} from '../types/pattern';
import type {StructureType} from '../types/structure-type';
import {coerceArray} from './coerce-array';

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

        files.forEach(file => {
            const structuresWithKind = coerceArray(structures).map(structure => ({
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
