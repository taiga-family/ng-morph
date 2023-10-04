import { Node, ObjectLiteralExpression } from 'ts-morph';

export function pushToObjectLiteralArrayProperty(
  objectLiteral: ObjectLiteralExpression,
  propertyName: string,
  initializer: string,
  {
    unique = false,
    forceToArray = false,
  }: { unique?: boolean; forceToArray?: boolean } = {}
) {
  const property =
    objectLiteral.getProperty(propertyName) ??
    objectLiteral.addProperty(`${propertyName}: []`);

  if (!Node.isPropertyAssignment(property)) {
    return;
  }

  if (
    forceToArray &&
    !Node.isArrayLiteralExpression(property.getInitializer())
  ) {
    property.setInitializer(`[${property.getInitializer().getText()}]`);
  }

  const importsInitializer = property.getInitializer();

  if (!Node.isArrayLiteralExpression(importsInitializer)) {
    return;
  }

  if (
    unique &&
    importsInitializer
      .getElements()
      .some((element) => element.getText() === initializer)
  ) {
    return;
  }

  importsInitializer.addElement(initializer);
}
