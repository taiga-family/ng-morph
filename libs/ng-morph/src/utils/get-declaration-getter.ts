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
        query?: Query<Omit<Structure, 'kind'>>,
    ): Declaration[] {
        return getFn(pattern).filter((declaration) =>
            // TODO: refactor it to support new typings
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            matchQuery(declaration.getStructure(), query),
        );
    };
}
