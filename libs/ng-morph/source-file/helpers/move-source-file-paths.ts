import { SourceFile } from 'ts-morph';

export function moveSourceFilePaths(
  files: SourceFile[],
  rename: (path: string) => string,
) {
  files.forEach((file) => {
    file.move(rename(file.getFilePath()));
  });
}
