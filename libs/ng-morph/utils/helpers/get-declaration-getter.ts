import type {Pattern} from '../types/pattern';
import type {StructureType} from '../types/structure-type';
import type {StructuredStatement} from '../types/structured-statement';
import type {Query} from './match-query';
import {matchQuery} from './match-query';

export function getDeclarationGetter<
    Declaration extends StructuredStatement<Declaration>,
    Structure extends StructureType<Declaration> = StructureType<Declaration>,
>(getFn: (pattern: Pattern) => Declaration[]) {
    return function getDeclaration(
        pattern: Pattern,
        query?: Query<Omit<Structure, 'kind'>>,
    ): Declaration[] {
        return getFn(pattern).filter(declaration =>
            // TODO: refactor it to support new typings
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            matchQuery(declaration.getStructure(), query),
        );
    };
}
