import {getDeclarationCreator} from 'ng-morph/utils';
import {ClassDeclaration, StructureKind} from 'ts-morph';

export const addClasses = getDeclarationCreator<ClassDeclaration>({
    kind: StructureKind.Class,
});
