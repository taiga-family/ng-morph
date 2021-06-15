import { getDecorators } from 'ng-morph/decorators';
import { ClassDeclaration, Node } from 'ts-morph';

export function pushToArrayProperty(
  classDeclaration: ClassDeclaration,
  decoratorName: string,
  propertyName: string,
  initializer: string
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

  if (!Node.isArrayLiteralExpression(property.getInitializer())) {
    property.setInitializer(`[${property.getInitializer().getText()}]`);
  }

  const importsInitializer = property.getInitializer();

  if (!Node.isArrayLiteralExpression(importsInitializer)) {
    return;
  }

  if (
    importsInitializer
      .getElements()
      .some((element) => element.getText() === initializer)
  ) {
    return;
  }

  importsInitializer.addElement(initializer);
}
