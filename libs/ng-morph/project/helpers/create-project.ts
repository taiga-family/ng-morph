import {join} from 'node:path';

import type {Tree} from '@angular-devkit/schematics';
import {NgCliProject} from 'ng-morph/project';
import type {Pattern} from 'ng-morph/utils';
import {coerceArray} from 'ng-morph/utils';

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
