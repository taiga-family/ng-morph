import { getImports, addImports, editImports } from '../../imports';
import { Pattern } from '../../utils';

export function mergeImports(
  pattern: Pattern,
  initializer: string,
  packageName: string
) {
  const namedImport = getImports(pattern, {
    namedImports: initializer,
    moduleSpecifier: packageName,
  });

  if (namedImport.length) {
    return;
  }

  const existingDeclaration = getImports(pattern, {
    moduleSpecifier: packageName,
  });

  if (existingDeclaration.length) {
    const modules = existingDeclaration[0]
      .getNamedImports()
      .map((namedImport) => namedImport.getText());

    editImports(existingDeclaration, () => ({
      namedImports: [...modules, initializer],
    }));

    return;
  }

  addImports(pattern, {
    moduleSpecifier: packageName,
    namedImports: [initializer],
  });
}
