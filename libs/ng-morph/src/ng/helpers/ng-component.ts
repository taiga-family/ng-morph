import {type ClassDeclaration} from 'ts-morph';

import {getClasses} from '../../classes';
import {type Pattern, type Query, type StructureType} from '../../utils';

export function getNgComponents(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        (declaration) => !!declaration.getDecorator('Component'),
    );
}
