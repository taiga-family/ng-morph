import { Node } from "ts-morph";

export function pushToObjectArgument(
  argument: Node,
  propertyName: string,
  initializer: string,
  {
    unique = false,
    forceToArray = false,
  }: { unique?: boolean; forceToArray?: boolean } = {}
) {
  if (!Node.isObjectLiteralExpression(argument)) {
    return;
  }

  const property =
    argument.getProperty(propertyName) ??
    argument.addProperty(`${propertyName}: []`);

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
