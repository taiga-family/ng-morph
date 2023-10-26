/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Tree} from '@angular-devkit/schematics';
import {JSONFile} from '../classes/json-file';
import {PACKAGE_PATH} from '../consts';
import * as semver from 'semver';

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
    return version.replace(/([\^~])/g, '');
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

    const json = new JSONFile(tree, pkgJsonPath);
    const path = [type, name];

    json.modify(path, version);
}

export function removePackageJsonDependency(
    tree: Tree,
    name: string,
    pkgJsonPath = PACKAGE_PATH,
): void {
    const json = new JSONFile(tree, pkgJsonPath);

    for (const depType of ALL_DEPENDENCY_TYPE) {
        json.remove([depType, name]);
    }
}

export function getPackageJsonDependency(
    tree: Tree,
    name: string,
    pkgJsonPath = PACKAGE_PATH,
): NodeDependency | null {
    const json = new JSONFile(tree, pkgJsonPath);

    for (const depType of ALL_DEPENDENCY_TYPE) {
        const version = json.get([depType, name]);

        if (typeof version === 'string') {
            return {
                type: depType,
                name: name,
                version,
            };
        }
    }

    return null;
}
