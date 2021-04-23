import { ExportDeclaration } from 'ts-morph';
import { getDeclarationRemover } from 'ng-morph/utils';

export const removeExports = getDeclarationRemover<ExportDeclaration>();
