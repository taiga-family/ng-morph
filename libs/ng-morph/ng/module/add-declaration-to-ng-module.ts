import type {ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers/push-to-decorator-array-property';

export function addDeclarationToNgModule(
    classDeclaration: ClassDeclaration,
    declaration: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(
        classDeclaration,
        'NgModule',
        'declarations',
        declaration,
        {
            unique,
            forceToArray: true,
        },
    );
}
