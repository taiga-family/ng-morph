/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { JsonValue } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';
import { Node } from 'jsonc-parser';
import { JSONFileContent } from './json-file-content';
import { JSONPath } from '../types/json-path';
import { InsertionIndex } from '../types/insertion-index';

export class JSONFile extends JSONFileContent {
  private readonly host: Tree;
  private readonly path: string;

  constructor(host: Tree, path: string) {
    const buffer = host.read(path);
    if (buffer) {
      super(buffer.toString());
    } else {
      throw new Error(`Could not read '${path}'.`);
    }

    this.host = host;
    this.path = path;
  }

  modify(
    jsonPath: JSONPath,
    value: JsonValue | undefined,
    insertInOrder?: InsertionIndex | false
  ): void {
    super.modify(jsonPath, value, insertInOrder);
    this.host.overwrite(this.path, this.content);
  }

  protected jsonAst(): Node {
    try {
      return super.jsonAst();
    } catch (e) {
      throw new Error(`[${this.path}] ${e.message}`);
    }
  }
}
