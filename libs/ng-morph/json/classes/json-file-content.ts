/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import type {JsonValue} from '@angular-devkit/core';
import type {Node, ParseError} from 'jsonc-parser';
import {
    applyEdits,
    findNodeAtLocation,
    getNodeValue,
    modify,
    parseTree,
    printParseErrorCode,
} from 'jsonc-parser';

import type {InsertionIndex} from '../types/insertion-index';
import type {JSONPath} from '../types/json-path';

export class JSONFileContent {
    protected jsonAstNode: Node | undefined;

    constructor(protected content: string) {}

    public get(jsonPath: JSONPath): string {
        if (jsonPath.length === 0) {
            return getNodeValue(this.jsonAst());
        }

        const node = findNodeAtLocation(this.jsonAst(), jsonPath);

        return node === undefined ? undefined : getNodeValue(node);
    }

    public getContent(): string {
        return this.content;
    }

    public modify(
        jsonPath: JSONPath,
        value: JsonValue | undefined,
        insertInOrder?: InsertionIndex | false,
    ): void {
        let getInsertionIndex: InsertionIndex | undefined;

        if (insertInOrder === undefined) {
            const property = jsonPath.slice(-1)[0];

            getInsertionIndex = properties =>
                // eslint-disable-next-line sonar/no-alphabetical-sort,@typescript-eslint/require-array-sort-compare
                [...properties, property].sort().findIndex(p => p === property);
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
        this.jsonAstNode = undefined;
    }

    public remove(jsonPath: JSONPath): void {
        if (this.get(jsonPath) !== undefined) {
            this.modify(jsonPath, undefined);
        }
    }

    protected jsonAst(): Node {
        if (this.jsonAstNode) {
            return this.jsonAstNode;
        }

        const errors: ParseError[] = [];

        this.jsonAstNode = parseTree(this.content, errors);

        if (errors.length) {
            const {error, offset} = errors[0];

            throw new Error(
                `Failed to parse as JSON AST Object. ${printParseErrorCode(
                    error,
                )} at location: ${offset}.`,
            );
        }

        return this.jsonAstNode;
    }
}
