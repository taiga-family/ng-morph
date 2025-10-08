import {type OptionalKind} from 'ts-morph';

import {type FilterPrimitive} from './filter-primitive';
import {type StructureType} from './structure-type';
import {type StructuredStatement} from './structured-statement';

export type StructureEditor<
    Declaration extends StructuredStatement<Declaration>,
    Structure extends OptionalKind<StructureType<Declaration>> = OptionalKind<
        StructureType<Declaration>
    >,
    UpdatableData extends FilterPrimitive<Structure> = FilterPrimitive<Structure>,
> = (structure: Structure, declaration: Declaration) => Partial<UpdatableData>;
