export function throwFileNotFound(filePath: string): never {
  throw new Error(`File not found: ${filePath}`);
}
