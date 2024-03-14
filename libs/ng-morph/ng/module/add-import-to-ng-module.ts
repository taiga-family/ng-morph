import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers/push-to-decorator-array-property';

export function addImportToNgModule(
    classDeclaration: ClassDeclaration,
    moduleName: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName, {
        unique,
        forceToArray: true,
    });
}
