import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addStyleUrlToComponent(
    classDeclaration: ClassDeclaration,
    styleUrl: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'Component', 'styleUrls', styleUrl, {
        unique,
    });
}
