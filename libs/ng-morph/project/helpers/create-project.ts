import {join} from 'path';
import {Tree} from '@angular-devkit/schematics';
import {NgCliProject} from 'ng-morph/project';
import {coerceArray, Pattern} from 'ng-morph/utils';

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
