import { ClassDeclaration, Node } from 'ts-morph';
import { getDecorators } from 'ng-morph/decorators';

export function addImportToModule(
  classDeclaration: ClassDeclaration,
  moduleName: string
) {
  const [moduleDecorator] = getDecorators(classDeclaration, {
    name: 'NgModule',
  });

  const [
    metadata = moduleDecorator.addArgument('{imports: []}'),
  ] = moduleDecorator.getArguments();

  if (!Node.isObjectLiteralExpression(metadata)) {
    return;
  }

  const importsProperty =
    metadata.getProperty('imports') ?? metadata.addProperty('imports: []');

  if (!Node.isPropertyAssignment(importsProperty)) {
    return;
  }

  const importsInitializer = importsProperty.getInitializer();

  if (!Node.isArrayLiteralExpression(importsInitializer)) {
    return;
  }

  importsInitializer.addElement(moduleName);
}
