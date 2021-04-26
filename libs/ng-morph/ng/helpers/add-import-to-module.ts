import { ClassDeclaration, Node } from 'ts-morph';
import { getDecorators } from 'ng-morph/decorators';
import { getImports } from 'ng-morph/imports';

export function addImportToModule(
  classDeclaration: ClassDeclaration,
  {
    moduleName,
    moduleSpecifier,
    element = moduleName,
  }: {
    moduleName: string;
    moduleSpecifier: string;
    element?: string;
  }
) {
  const file = classDeclaration.getSourceFile();

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

  importsInitializer.addElement(element);

  const [
    moduleImport = file.addImportDeclaration({
      moduleSpecifier,
      namedImports: [moduleName],
    }),
  ] = getImports(file.getFilePath(), {
    moduleSpecifier,
  });

  if (
    !moduleImport
      .getNamedImports()
      .find((namedImport) => namedImport.getName() === moduleName)
  ) {
    moduleImport.addNamedImport(moduleName);
  }
}
