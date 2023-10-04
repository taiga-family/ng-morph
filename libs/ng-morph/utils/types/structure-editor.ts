import { StructuredStatement } from '../types/structured-statement';
import { StructureType } from '../types/structure-type';
import { OptionalKind } from 'ts-morph';
import { FilterPrimitive } from '../types/filter-primitive';

export type StructureEditor<
  Declaration extends StructuredStatement<Declaration>,
  Structure extends OptionalKind<StructureType<Declaration>> = OptionalKind<
    StructureType<Declaration>
  >,
  UpdatableData extends FilterPrimitive<Structure> = FilterPrimitive<Structure>,
> = (structure: Structure, declaration: Declaration) => Partial<UpdatableData>;
