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

  const importsInitializer = property.getInitializer();

  if (!Node.isArrayLiteralExpression(importsInitializer)) {
    return;
  }

  importsInitializer.addElement(initializer);
}
