/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {EmptyTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';

import {getProjectTarget, getProjectTargets} from './get-project-targets';

describe('get project targets', () => {
    describe('getProjectTargets', () => {
        let tree: UnitTestTree;

        beforeEach(() => {
            tree = new UnitTestTree(new EmptyTree());
            tree.create(
                'angular.json',
                JSON.stringify({
                    version: 1,
                    projects: {
                        migrations: {},
                        core: {
                            root: '',
                        },
                    },
                }),
            );
        });

        it('should return all projects', () => {
            const projects = getProjectTargets(tree);

            expect([...projects]).toEqual([
                ['migrations', {}],
                ['core', {root: ''}],
            ]);
        });

        it('should return the core project', () => {
            const project = getProjectTarget(tree, 'core');

            expect(project).toEqual({root: ''});
        });

        it('should return null', () => {
            const project = getProjectTarget(tree, 'some-project');

            expect(project).toBeNull();
        });
    });
});
