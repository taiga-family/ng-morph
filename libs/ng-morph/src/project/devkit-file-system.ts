/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as path from 'node:path';

import {normalize, type Path, PathIsDirectoryException} from '@angular-devkit/core';
import {type Tree, type UpdateRecorder} from '@angular-devkit/schematics';

import {type DirectoryEntry, FileSystem} from './file-system';

/**
 * File system that leverages the virtual tree from the CLI devkit. This file
 * system is commonly used by `ng update` migrations that run as part of the
 * Angular CLI.
 */
export class DevkitFileSystem extends FileSystem {
    private readonly updateRecorderCache = new Map<string, UpdateRecorder>();

    constructor(public readonly tree: Tree) {
        super();
    }

    public resolve(...segments: string[]): Path {
        // Note: We use `posix.resolve` as the devkit paths are using posix separators.
        return normalize(path.posix.resolve('/', ...segments.map(normalize)));
    }

    public edit(filePath: Path): UpdateRecorder {
        if (this.updateRecorderCache.has(filePath)) {
            return this.updateRecorderCache.get(filePath)!;
        }

        const recorder = this.tree.beginUpdate(filePath);

        this.updateRecorderCache.set(filePath, recorder);

        return recorder;
    }

    public commitEdits(): void {
        this.updateRecorderCache.forEach((r) => this.tree.commitUpdate(r));
        this.updateRecorderCache.clear();
    }

    public exists(fileOrDirPath: Path): boolean {
        // The devkit tree does not expose an API for checking whether a given
        // directory exists. It throws a specific error though if a directory
        // is being read as a file. We use that to check if a directory exists.
        try {
            return this.tree.get(fileOrDirPath) !== null;
        } catch (e) {
            if (e instanceof PathIsDirectoryException) {
                return true;
            }
        }

        return false;
    }

    public overwrite(filePath: Path, content: string): void {
        this.tree.overwrite(filePath, content);
    }

    public create(filePath: Path, content: string): void {
        this.tree.create(filePath, content);
    }

    public delete(filePath: Path): void {
        this.tree.delete(filePath);
    }

    public read(filePath: Path | string): string | null {
        const buffer = this.tree.read(filePath);

        return buffer !== null ? buffer.toString() : null;
    }

    public readDirectory(dirPath: Path): DirectoryEntry {
        try {
            const {subdirs: directories, subfiles: files} = this.tree.getDir(dirPath);

            return {directories, files};
        } catch {
            return {directories: [], files: []};
        }
    }
}
