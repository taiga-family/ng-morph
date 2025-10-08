import {type ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addProviderToComponent(
    classDeclaration: ClassDeclaration,
    provider: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'Component', 'providers', provider, {
        unique,
        forceToArray: true,
    });
}
