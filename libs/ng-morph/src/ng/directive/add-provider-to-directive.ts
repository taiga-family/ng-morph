import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addProviderToDirective(
    classDeclaration: ClassDeclaration,
    provider: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'Directive', 'providers', provider, {
        unique,
        forceToArray: true,
    });
}
