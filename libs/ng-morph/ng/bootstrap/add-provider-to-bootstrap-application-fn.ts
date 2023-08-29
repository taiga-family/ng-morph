import { CallExpression } from "ts-morph";
import { pushToObjectArgument } from "../helpers/push-to-object-argument";

export function addProviderToBootstrapApplicationFn(
  callExpression: CallExpression,
  provider: string,
  { unique = false }: { unique?: boolean } = {}
) {
  const [_, options = callExpression.addArgument(`{providers: []}`)] = callExpression.getArguments();

  pushToObjectArgument(options, 'providers', provider, { unique });
}
