import {getDeclarationCreator} from 'ng-morph/utils';
import type {ClassDeclaration} from 'ts-morph';
import {StructureKind} from 'ts-morph';

export const addClasses = getDeclarationCreator<ClassDeclaration>({
    kind: StructureKind.Class,
});
