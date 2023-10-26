/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { UpdateRecorder } from './update-recorder';
import { FileSystemHost, RuntimeDirEntry } from 'ts-morph';
import { basename, join } from 'path';
import multimatch from 'multimatch';
import { DevkitFileSystem } from './devkit-file-system';

/**
 * A workspace path semantically is equivalent to the `Path` type provided by the
 * Angular devkit. Paths denoted with such a type are guaranteed to be representing
 * paths of a given virtual file system. This means that the root of a path can be
 * different, and does not necessarily need to match the root in the real file system.
 *
 * For example: Consider we have a project in `/home/<..>/my-project`. Then a path
 * like `/package.json` could actually refer to the `package.json` file in `my-project`.
 * Note that in the real file system this would not match though.
 *
 * One wonder why another type has been declared for such paths, when there already
 * is the `Path` type provided by the devkit. We do this for a couple of reasons:
 *
 *   1. The update-tool cannot have a dependency on the Angular devkit as that one
 *      is not synced into g3. We want to be able to run migrations in g3 if needed.
 */
export type WorkspacePath = string & {
  // Brand signature matches the devkit paths so that existing path
  // utilities from the Angular devkit can be conveniently used.
  __PRIVATE_DEVKIT_PATH: void;
};

/** Interface that describes a directory. */
export interface DirectoryEntry {
  /** List of directories inside the directory. */
  directories: string[];
  /** List of files inside the directory. */
  files: string[];
}

/**
 * Abstraction of the file system that migrations can use to record and apply
 * changes. This is necessary to support virtual file systems as used in the CLI devkit.
 */
export abstract class FileSystem {
  /** Checks whether the given file or directory exists. */
  abstract exists(path: WorkspacePath): boolean;

  /** Gets the contents of the given file. */
  abstract read(filePath: WorkspacePath): string | null;

  /** Reads the given directory to retrieve children. */
  abstract readDirectory(dirPath: WorkspacePath): DirectoryEntry;

  /**
   * Creates an update recorder for the given file. Edits can be recorded and
   * committed in batches. Changes are not applied automatically because otherwise
   * migrations would need to re-read files, or account for shifted file contents.
   */
  abstract edit(filePath: WorkspacePath): UpdateRecorder;

  /** Applies all changes which have been recorded in update recorders. */
  abstract commitEdits(): void;

  /** Creates a new file with the given content. */
  abstract create(filePath: WorkspacePath, content: string): void;

  /** Overwrites an existing file with the given content. */
  abstract overwrite(filePath: WorkspacePath, content: string): void;

  /** Deletes the given file. */
  abstract delete(filePath: WorkspacePath): void;

  /**
   * Resolves given paths to a resolved path in the file system. For example, the devkit
   * tree considers the actual workspace directory as file system root.
   *
   * Follows the same semantics as the native path `resolve` method. i.e. segments
   * are processed in reverse. The last segment is considered the target and the
   * function will iterate from the target through other segments until it finds an
   * absolute path segment.
   */
  abstract resolve(...segments: string[]): WorkspacePath;
}

export class NgCliFileSystem implements FileSystemHost {
  constructor(public fs: DevkitFileSystem) {}

  async copy(srcPath: string, destPath: string): Promise<void> {
    this.copySync(srcPath, destPath);
  }

  copySync(srcPath: string, destPath: string): void {
    if (this.fileExistsSync(srcPath)) {
      this.writeFileSync(destPath, this.readFileSync(srcPath));
    } else if (this.directoryExistsSync(srcPath)) {
      const paths = this.readDirSync(srcPath);

      paths.forEach((path) =>
        this.copySync(path.name, join(destPath, basename(path.name))),
      );
    }
  }

  async delete(path: string): Promise<void> {
    this.deleteSync(path);
  }

  deleteSync(path: string): void {
    this.fs.delete(path as WorkspacePath);
  }

  async directoryExists(dirPath: string): Promise<boolean> {
    return this.directoryExistsSync(dirPath);
  }

  directoryExistsSync(dirPath: string): boolean {
    return (
      this.fs.exists(dirPath as WorkspacePath) && !this.fileExistsSync(dirPath)
    );
  }

  async fileExists(filePath: string): Promise<boolean> {
    return this.fileExistsSync(filePath);
  }

  fileExistsSync(filePath: string): boolean {
    try {
      return this.fs.read(filePath as WorkspacePath) !== null;
    } catch (e) {
      return false;
    }
  }

  getCurrentDirectory(): string {
    return '/';
  }

  async glob(patterns: ReadonlyArray<string>): Promise<string[]> {
    return this.globSync(patterns);
  }

  globSync(patterns: ReadonlyArray<string>): string[] {
    return multimatch(this.getAllFilePaths(), patterns as string[]);
  }

  isCaseSensitive(): boolean {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mkdir(dirPath: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mkdirSync(dirPath: string): void {
    // empty
  }

  async move(srcPath: string, destPath: string): Promise<void> {
    this.moveSync(srcPath, destPath);
  }

  moveSync(srcPath: string, destPath: string): void {
    this.copySync(srcPath, destPath);

    this.deleteSync(srcPath);
  }

  readDirSync(dirPath: string): RuntimeDirEntry[] {
    const { directories, files } = this.fs.readDirectory(
      dirPath as WorkspacePath,
    );

    return directories
      .map((name) => ({
        name,
        isFile: false,
        isDirectory: true,
        isSymlink: false,
      }))
      .concat(
        files.map((name) => ({
          name,
          isFile: true,
          isDirectory: false,
          isSymlink: false,
        })),
      );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async readFile(filePath: string, encoding?: string): Promise<string> {
    return this.readFileSync(filePath);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readFileSync(filePath: string, encoding?: string): string {
    return this.fs.read(filePath as WorkspacePath) as string;
  }

  realpathSync(path: string): string {
    return path;
  }

  async writeFile(filePath: string, fileText: string): Promise<void> {
    this.writeFileSync(filePath, fileText);
  }

  writeFileSync(filePath: string, fileText: string): void {
    if (this.fileExistsSync(filePath)) {
      this.fs.overwrite(filePath as WorkspacePath, fileText);
    } else {
      this.fs.create(filePath as WorkspacePath, fileText);
    }
  }

  getAllFilePaths(path = '/', foundedFiles: string[] = []) {
    const { directories, files } = this.fs.readDirectory(path as WorkspacePath);

    foundedFiles.push(...files.map((file) => join(path, file)));

    directories
      .filter((dir) => !dir.startsWith('.') && dir !== 'node_modules')
      .forEach((dir) => this.getAllFilePaths(join(path, dir), foundedFiles));

    return foundedFiles;
  }
}
