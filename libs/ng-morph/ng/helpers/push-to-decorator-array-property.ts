import {getDecorators} from 'ng-morph/decorators';
import type {ClassDeclaration} from 'ts-morph';
import {Node} from 'ts-morph';

import {pushToObjectLiteralArrayProperty} from './push-to-object-literal-array-property';

// TODO: investigate how to handle consts in descriptors that don't accept array of array type, like styleUrls
export function pushToDecoratorArrayProperty(
    classDeclaration: ClassDeclaration,
    decoratorName: string,
    propertyName: string,
    initializer: string,
    {
        unique = false,
        forceToArray = false,
    }: {unique?: boolean; forceToArray?: boolean} = {},
): void {
    const [decorator] = getDecorators(classDeclaration, {
        name: decoratorName,
    });

    const [metadata = decorator.addArgument(`{${propertyName}: []}`)] =
        decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    pushToObjectLiteralArrayProperty(metadata, propertyName, initializer, {
        unique,
        forceToArray,
    });
}
