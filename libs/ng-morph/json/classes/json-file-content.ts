/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { JsonValue } from '@angular-devkit/core';
import {
  applyEdits,
  findNodeAtLocation,
  getNodeValue,
  modify,
  Node,
  ParseError,
  parseTree,
  printParseErrorCode,
} from 'jsonc-parser';
import { JSONPath } from '../types/json-path';
import { InsertionIndex } from '../types/insertion-index';

export class JSONFileContent {
  protected _jsonAst: Node | undefined;

  constructor(protected content: string) {}

  getContent(): string {
    return this.content;
  }

  get(jsonPath: JSONPath) {
    if (jsonPath.length === 0) {
      return getNodeValue(this.jsonAst());
    }

    const node = findNodeAtLocation(this.jsonAst(), jsonPath);

    return node === undefined ? undefined : getNodeValue(node);
  }

  modify(
    jsonPath: JSONPath,
    value: JsonValue | undefined,
    insertInOrder?: InsertionIndex | false,
  ): void {
    let getInsertionIndex: InsertionIndex | undefined;
    if (insertInOrder === undefined) {
      const property = jsonPath.slice(-1)[0];
      getInsertionIndex = (properties) =>
        [...properties, property].sort().findIndex((p) => p === property);
    } else if (insertInOrder !== false) {
      getInsertionIndex = insertInOrder;
    }

    const edits = modify(this.content, jsonPath, value, {
      getInsertionIndex,
      formattingOptions: {
        insertSpaces: true,
        tabSize: 2,
      },
    });

    this.content = applyEdits(this.content, edits);
    this._jsonAst = undefined;
  }

  remove(jsonPath: JSONPath): void {
    if (this.get(jsonPath) !== undefined) {
      this.modify(jsonPath, undefined);
    }
  }

  protected jsonAst(): Node {
    if (this._jsonAst) {
      return this._jsonAst;
    }

    const errors: ParseError[] = [];
    this._jsonAst = parseTree(this.content, errors);
    if (errors.length) {
      const { error, offset } = errors[0];
      throw new Error(
        `Failed to parse as JSON AST Object. ${printParseErrorCode(
          error,
        )} at location: ${offset}.`,
      );
    }

    return this._jsonAst;
  }
}
