import {join} from 'node:path';

import {type Tree} from '@angular-devkit/schematics';

import {coerceArray} from '../utils/coerce-array';
import {type Pattern} from '../utils/pattern';
import {NgCliProject} from './ng-cli-project';

export function createProject(
    host: Tree,
    rootPath = '/',
    pattern: Pattern = ['**/*.ts'],
): NgCliProject {
    const project = new NgCliProject({host});

    project.addSourceFilesAtPaths(
        coerceArray(pattern).map((glob) =>
            project.getFileSystem().fs.resolve(join(rootPath, glob)),
        ),
    );

    return project;
}
