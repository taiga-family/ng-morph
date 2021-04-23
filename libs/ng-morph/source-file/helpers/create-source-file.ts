import { getActiveProject } from 'ng-morph/project';
import { SourceFile } from 'ts-morph';

export function createSourceFile(
  filePath: string,
  content?: string
): SourceFile {
  return getActiveProject().createSourceFile(filePath, content);
}
