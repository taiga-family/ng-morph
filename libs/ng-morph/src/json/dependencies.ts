/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import type {Tree} from '@angular-devkit/schematics';
import * as semver from 'semver';

import {PACKAGE_PATH} from './consts';
import {JSONFile} from './json-file';

// eslint-disable-next-line no-restricted-syntax
export enum NodeDependencyType {
    Default = 'dependencies',
    Dev = 'devDependencies',
    Peer = 'peerDependencies',
    Optional = 'optionalDependencies',
}

export interface NodeDependency {
    name: string;
    version: string;
    type?: NodeDependencyType;
    overwrite?: boolean;
}

const ALL_DEPENDENCY_TYPE = [
    NodeDependencyType.Default,
    NodeDependencyType.Dev,
    NodeDependencyType.Optional,
    NodeDependencyType.Peer,
];

function versionSanitize(version: string): string {
    return version.replaceAll(/([\^~])/g, '');
}

export function addPackageJsonDependency(
    tree: Tree,
    dependency: NodeDependency,
    pkgJsonPath = PACKAGE_PATH,
): void {
    const {version: oldVersion} = getPackageJsonDependency(
        tree,
        dependency.name,
        pkgJsonPath,
    ) ?? {version: '0.0.0'};

    const {overwrite, type = NodeDependencyType.Default, name, version} = dependency;

    if (!overwrite && semver.gt(versionSanitize(oldVersion), versionSanitize(version))) {
        return;
    }

    try {
        const json = new JSONFile(tree, pkgJsonPath);
        const path = [type, name];

        json.modify(path, version);
    } catch {}
}

export function removePackageJsonDependency(
    tree: Tree,
    name: string,
    pkgJsonPath = PACKAGE_PATH,
): void {
    try {
        const json = new JSONFile(tree, pkgJsonPath);

        ALL_DEPENDENCY_TYPE.forEach((depType) => json.remove([depType, name]));
    } catch {}
}

export function getPackageJsonDependency(
    tree: Tree,
    name: string,
    pkgJsonPath = PACKAGE_PATH,
): NodeDependency | null {
    try {
        const json = new JSONFile(tree, pkgJsonPath);

        for (const depType of ALL_DEPENDENCY_TYPE) {
            const version = json.get([depType, name]);

            if (typeof version === 'string') {
                return {
                    type: depType,
                    name,
                    version,
                };
            }
        }

        return null;
    } catch {
        return null;
    }
}
