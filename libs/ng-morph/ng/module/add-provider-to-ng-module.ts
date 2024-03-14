import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers/push-to-decorator-array-property';

export function addProviderToNgModule(
    classDeclaration: ClassDeclaration,
    provider: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'providers', provider, {
        unique,
        forceToArray: true,
    });
}
