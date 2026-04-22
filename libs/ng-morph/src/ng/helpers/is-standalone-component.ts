import {type ClassDeclaration, Node} from 'ts-morph';

export function isStandaloneComponent(component: ClassDeclaration): boolean {
    const decorator = component.getDecorator('Component');

    if (!decorator) {
        return false;
    }

    const [metadata] = decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return true;
    }

    const property = metadata.getProperty('standalone');

    if (!Node.isPropertyAssignment(property)) {
        return true;
    }

    return property.getInitializer()?.getText() === 'true';
}
