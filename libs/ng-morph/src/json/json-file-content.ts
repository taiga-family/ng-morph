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

import type {InsertionIndex} from './insertion-index';
import type {JSONPath} from './json-path';

export class JSONFileContent {
    protected jsonAstNode: Node | undefined;

    constructor(protected content: string) {}

    public get(jsonPath: JSONPath): string | undefined {
        const ast = this.jsonAst();
        const node = ast ? findNodeAtLocation(ast, jsonPath) : null;

        if (!node || !ast) {
            return undefined;
        }

        return getNodeValue(node);
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

            getInsertionIndex = (properties) =>
                [...properties, property]
                    .sort(
                        (a, b) => a?.toString().localeCompare(b?.toString() ?? '') ?? -1,
                    )
                    .findIndex((p) => p === property);
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

    protected jsonAst(): Node | undefined {
        if (this.jsonAstNode) {
            return this.jsonAstNode;
        }

        const errors: ParseError[] = [];

        this.jsonAstNode = parseTree(this.content, errors);

        if (errors.length) {
            const {error, offset} = errors[0]!;

            throw new Error(
                `Failed to parse as JSON AST Object. ${printParseErrorCode(
                    error,
                )} at location: ${offset}.`,
            );
        }

        return this.jsonAstNode;
    }
}
