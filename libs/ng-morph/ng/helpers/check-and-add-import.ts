import { getImports, removeImports, addImports } from '../../imports';
import { Pattern } from '../../utils';

export function checkImportAndAdd(
  pattern: Pattern,
  initializer: string,
  packageName: string
) {
  const imports = getImports(pattern);
  const namedImportExists = imports.some((importDeclaration) =>
    importDeclaration
      .getNamedImports()
      .map((namedImport) => namedImport.getText())
      .includes(initializer)
  );

  if (namedImportExists) {
    return;
  }

  const existingDeclaration = imports.find(
    (importDeclaration) =>
      importDeclaration.getModuleSpecifier().getText().replace(/['"]/g, '') ===
      packageName
  );

  if (existingDeclaration) {
    const modules = existingDeclaration
      .getNamedImports()
      .map((namedImport) => namedImport.getText());

    removeImports(existingDeclaration);
    addImports(pattern, {
      moduleSpecifier: packageName,
      namedImports: [...modules, initializer],
    });

    return;
  }

  addImports(pattern, {
    moduleSpecifier: packageName,
    namedImports: [initializer],
  });
}
