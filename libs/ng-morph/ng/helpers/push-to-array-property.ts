import { getDecorators } from 'ng-morph/decorators';
import { ClassDeclaration } from 'ts-morph';
import { pushToObjectArgument } from "./push-to-object-argument";

// TODO: investigate how to handle consts in descriptors that don't accept array of array type, like styleUrls
export function pushToArrayProperty(
  classDeclaration: ClassDeclaration,
  decoratorName: string,
  propertyName: string,
  initializer: string,
  {
    unique = false,
    forceToArray = false,
  }: { unique?: boolean; forceToArray?: boolean } = {}
) {
  const [decorator] = getDecorators(classDeclaration, {
    name: decoratorName,
  });

  const [
    metadata = decorator.addArgument(`{${propertyName}: []}`),
  ] = decorator.getArguments();

  pushToObjectArgument(metadata, propertyName, initializer, {
    unique,
    forceToArray,
  })
}
