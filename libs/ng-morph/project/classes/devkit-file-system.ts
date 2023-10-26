/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {normalize, Path, PathIsDirectoryException} from '@angular-devkit/core';
import {Tree, UpdateRecorder} from '@angular-devkit/schematics';
import * as path from 'path';
import {DirectoryEntry, FileSystem} from './file-system';

/**
 * File system that leverages the virtual tree from the CLI devkit. This file
 * system is commonly used by `ng update` migrations that run as part of the
 * Angular CLI.
 */
export class DevkitFileSystem extends FileSystem {
    private _updateRecorderCache = new Map<string, UpdateRecorder>();

    constructor(readonly tree: Tree) {
        super();
    }

    resolve(...segments: string[]): Path {
        // Note: We use `posix.resolve` as the devkit paths are using posix separators.
        return normalize(path.posix.resolve('/', ...segments.map(normalize)));
    }

    edit(filePath: Path): UpdateRecorder {
        if (this._updateRecorderCache.has(filePath)) {
            return this._updateRecorderCache.get(filePath) as UpdateRecorder;
        }
        const recorder = this.tree.beginUpdate(filePath);
        this._updateRecorderCache.set(filePath, recorder);
        return recorder;
    }

    commitEdits() {
        this._updateRecorderCache.forEach(r => this.tree.commitUpdate(r));
        this._updateRecorderCache.clear();
    }

    exists(fileOrDirPath: Path) {
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

    overwrite(filePath: Path, content: string) {
        this.tree.overwrite(filePath, content);
    }

    create(filePath: Path, content: string) {
        this.tree.create(filePath, content);
    }

    delete(filePath: Path) {
        this.tree.delete(filePath);
    }

    read(filePath: Path) {
        const buffer = this.tree.read(filePath);
        return buffer !== null ? buffer.toString() : null;
    }

    readDirectory(dirPath: Path): DirectoryEntry {
        try {
            const {subdirs: directories, subfiles: files} = this.tree.getDir(dirPath);
            return {directories, files};
        } catch (e) {
            return {directories: [], files: []};
        }
    }
}
