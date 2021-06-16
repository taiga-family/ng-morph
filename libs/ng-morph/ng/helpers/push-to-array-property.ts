import { getDecorators } from 'ng-morph/decorators';
import { ClassDeclaration, Node } from 'ts-morph';

// TODO: investigate how to handle consts in descriptors that don't accept array of array type, like styleUrls
export function pushToArrayProperty(
  classDeclaration: ClassDeclaration,
  decoratorName: string,
  propertyName: string,
  initializer: string,
  unique = false,
  forceToArray = false
) {
  const [decorator] = getDecorators(classDeclaration, {
    name: decoratorName,
  });

  const [
    metadata = decorator.addArgument(`{${propertyName}: []}`),
  ] = decorator.getArguments();

  if (!Node.isObjectLiteralExpression(metadata)) {
    return;
  }

  const property =
    metadata.getProperty(propertyName) ??
    metadata.addProperty(`${propertyName}: []`);

  if (!Node.isPropertyAssignment(property)) {
    return;
  }

  if (
    !Node.isArrayLiteralExpression(property.getInitializer()) &&
    forceToArray
  ) {
    property.setInitializer(`[${property.getInitializer().getText()}]`);
  }

  const importsInitializer = property.getInitializer();

  if (!Node.isArrayLiteralExpression(importsInitializer)) {
    return;
  }

  if (
    importsInitializer
      .getElements()
      .some((element) => element.getText() === initializer) &&
    unique
  ) {
    return;
  }

  importsInitializer.addElement(initializer);
}
