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
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    type NodeDependency,
    NodeDependencyType,
} from 'ng-morph';

describe('dependencies', () => {
    describe('addDependency', () => {
        let tree: UnitTestTree;
        const pkgJsonPath = '/package.json';
        let dependency: NodeDependency;

        beforeEach(() => {
            tree = new UnitTestTree(new EmptyTree());
            tree.create(pkgJsonPath, '{}');

            dependency = {
                name: 'my-pkg',
                version: '1.2.3',
            };
        });

        [
            {key: 'dependencies'},
            {type: NodeDependencyType.Dev, key: 'devDependencies'},
            {type: NodeDependencyType.Optional, key: 'optionalDependencies'},
            {type: NodeDependencyType.Peer, key: 'peerDependencies'},
        ].forEach((type) => {
            describe(`Type: ${type.type ?? NodeDependencyType.Default}`, () => {
                beforeEach(() => {
                    dependency.type = type.type;
                });

                it('should add a dependency', () => {
                    addPackageJsonDependency(tree, dependency);
                    const pkgJson = JSON.parse(tree.readContent(pkgJsonPath));

                    expect(pkgJson[type.key][dependency.name]).toEqual(
                        dependency.version,
                    );
                });

                it('should handle an existing dependency (update version)', () => {
                    addPackageJsonDependency(tree, {...dependency, version: '^2.0.0'});
                    addPackageJsonDependency(tree, {...dependency, overwrite: true});
                    const pkgJson = JSON.parse(tree.readContent(pkgJsonPath));

                    expect(pkgJson[type.key][dependency.name]).toEqual(
                        dependency.version,
                    );
                });

                it("shouldn't handle an existing dependency (don't update version)", () => {
                    addPackageJsonDependency(tree, {...dependency, version: '~2.0.0'});
                    addPackageJsonDependency(tree, {...dependency});
                    const pkgJson = JSON.parse(tree.readContent(pkgJsonPath));

                    expect(pkgJson[type.key][dependency.name]).toBe('~2.0.0');
                });
            });
        });

        it('should throw when missing package.json', () => {
            expect(() => addPackageJsonDependency(new EmptyTree(), dependency)).toThrow();
        });
    });

    describe('getDependency', () => {
        let tree: UnitTestTree;

        beforeEach(() => {
            const pkgJsonPath = '/package.json';
            const pkgJsonContent = JSON.stringify(
                {
                    dependencies: {
                        'my-pkg': '1.2.3',
                    },
                },
                null,
                2,
            );

            tree = new UnitTestTree(new EmptyTree());
            tree.create(pkgJsonPath, pkgJsonContent);
        });

        it('should get a dependency', () => {
            const dep = getPackageJsonDependency(tree, 'my-pkg');

            expect(dep?.type).toEqual(NodeDependencyType.Default);
            expect(dep?.name).toBe('my-pkg');
            expect(dep?.version).toBe('1.2.3');
        });

        it('should return null if dependency does not exist', () => {
            const dep = getPackageJsonDependency(tree, 'missing-pkg');

            expect(dep).toBeNull();
        });
    });
});
