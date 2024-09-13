import type {Query} from './match-query';
import {matchQuery} from './match-query';
import type {Pattern} from './pattern';
import type {StructureType} from './structure-type';
import type {StructuredStatement} from './structured-statement';

export function getDeclarationGetter<
    Declaration extends StructuredStatement<Declaration>,
    Structure extends StructureType<Declaration> = StructureType<Declaration>,
>(getFn: (pattern: Pattern) => Declaration[]) {
    return function getDeclaration(
        pattern: Pattern,
        query?: Query<Structure>,
    ): Declaration[] {
        return getFn(pattern).filter((declaration) => {
            try {
                return matchQuery(declaration.getStructure(), query);
            } catch (error: unknown) {
                const path = declaration.getSourceFile().getFilePath();
                const err = error as Error;

                throw new Error(
                    `An error occurred in ${path}\n${err.message}\n${err.stack}`,
                );
            }
        });
    };
}
