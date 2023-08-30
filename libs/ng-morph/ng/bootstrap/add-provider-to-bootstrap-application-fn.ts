import { CallExpression, Identifier, Node, ObjectLiteralExpression, SyntaxKind } from "ts-morph";
import { pushToObjectLiteralArrayProperty } from "../helpers/push-to-object-literal-array-property";

export function addProviderToBootstrapApplicationFn(
  callExpression: CallExpression,
  provider: string,
  { unique = false }: { unique?: boolean } = {}
) {
  const [_, options = callExpression.addArgument(`{providers: []}`)] = callExpression.getArguments();

  if (!Node.isIdentifier(options) && !Node.isObjectLiteralExpression(options)) {
    return;
  }

  pushToObjectLiteralArrayProperty(getOptionsObject(options), 'providers', provider, { unique });
}

function getOptionsObject(
  options: Identifier | ObjectLiteralExpression,
): ObjectLiteralExpression {
  if (Node.isObjectLiteralExpression(options)) {
    return options;
  }

  const definition = options.getDefinitionNodes()[0];

  return definition.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
}
