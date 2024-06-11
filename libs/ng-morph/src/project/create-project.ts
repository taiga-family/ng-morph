import {join} from 'node:path';

import type {Tree} from '@angular-devkit/schematics';

import type {Pattern} from '../utils';
import {coerceArray} from '../utils';
import {NgCliProject} from './ng-cli-project';

export function createProject(
    host: Tree,
    rootPath = '/',
    pattern: Pattern = ['**/*.ts'],
): NgCliProject {
    const project = new NgCliProject({host});

    project.addSourceFilesAtPaths(
        coerceArray(pattern).map(glob =>
            project.getFileSystem().fs.resolve(join(rootPath, glob)),
        ),
    );

    return project;
}
