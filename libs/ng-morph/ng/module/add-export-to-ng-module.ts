import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers/push-to-decorator-array-property';

export function addExportToNgModule(
    classDeclaration: ClassDeclaration,
    exportName: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'exports', exportName, {
        unique,
        forceToArray: true,
    });
}
