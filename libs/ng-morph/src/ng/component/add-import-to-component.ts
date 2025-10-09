import {type ClassDeclaration} from 'ts-morph';

import {pushToDecoratorArrayProperty} from '../helpers';

export function addImportToComponent(
    classDeclaration: ClassDeclaration,
    importName: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'Component', 'imports', importName, {
        unique,
        forceToArray: true,
    });
}
