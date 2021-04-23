import { getDeclarationCreator } from 'ng-morph/utils';
import {
  FunctionDeclaration,
  FunctionDeclarationStructure,
  OptionalKind,
  StructureKind,
} from 'ts-morph';

export const addFunctions = getDeclarationCreator<
  FunctionDeclaration,
  OptionalKind<FunctionDeclarationStructure>
>({ kind: StructureKind.Function });
