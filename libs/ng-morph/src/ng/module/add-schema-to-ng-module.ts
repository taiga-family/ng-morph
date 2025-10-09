import {type ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addSchemaToNgModule(
    classDeclaration: ClassDeclaration,
    schema: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'schemas', schema, {
        unique,
        forceToArray: true,
    });
}
