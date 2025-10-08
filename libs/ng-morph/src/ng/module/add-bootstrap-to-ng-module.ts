import {type ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addBootstrapToNgModule(
    classDeclaration: ClassDeclaration,
    component: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'NgModule', 'bootstrap', component, {
        unique,
        forceToArray: true,
    });
}
