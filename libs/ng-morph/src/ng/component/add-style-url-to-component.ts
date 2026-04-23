import {type ClassDeclaration, Node} from 'ts-morph';

import {getDecorators} from '../../decorators';
import {pushToObjectLiteralArrayProperty} from '../helpers/push-to-object-literal-array-property';

export function addStyleUrlToComponent(
    classDeclaration: ClassDeclaration,
    styleUrl: string,
    {unique = false}: {unique?: boolean} = {},
): void {
    const [decorator] = getDecorators(classDeclaration, {name: 'Component'});

    if (!decorator) {
        return;
    }

    const args = decorator.getArguments();
    const [metadata = decorator.addArgument(`{styleUrl: ${styleUrl}}`)] = args;

    if (!Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    const existingStyleUrl = metadata.getProperty('styleUrl');
    const existingStyleUrls = metadata.getProperty('styleUrls');

    if (
        existingStyleUrl &&
        Node.isPropertyAssignment(existingStyleUrl) &&
        args.length > 0
    ) {
        if (unique && existingStyleUrl.getFullText() === styleUrl) {
            return;
        }

        const existingStyleUrlValue = existingStyleUrl.getInitializer()?.getText();

        existingStyleUrl.remove();
        metadata.addProperty(`styleUrls: [${existingStyleUrlValue}, ${styleUrl}]`);

        return;
    }

    if (existingStyleUrls && Node.isPropertyAssignment(existingStyleUrls)) {
        pushToObjectLiteralArrayProperty(metadata, 'styleUrls', styleUrl, {unique});

        return;
    }

    if (!existingStyleUrl) {
        metadata.addProperty(`styleUrl: ${styleUrl}`);
    }
}
