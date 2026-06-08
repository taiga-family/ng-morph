import {join} from 'node:path';

import {type Tree} from '@angular-devkit/schematics';

import {coerceArray} from '../utils/coerce-array';
import {isNegativeGlobPattern, type Pattern} from '../utils/pattern';
import {NgCliProject} from './ng-cli-project';

export function createProject(
    host: Tree,
    rootPath = '/',
    pattern: Pattern = ['**/*.ts'],
): NgCliProject {
    const project = new NgCliProject({host});

    project.addSourceFilesAtPaths(
        coerceArray(pattern).map((glob) => {
            const isNegativeGlob = isNegativeGlobPattern(glob);
            const patternWithoutNegativeMarker = isNegativeGlob ? glob.slice(1) : glob;

            const patternWithRootPath = patternWithoutNegativeMarker.startsWith('/')
                ? patternWithoutNegativeMarker
                : join(rootPath, patternWithoutNegativeMarker);

            const resolvedPattern = project
                .getFileSystem()
                .fs.resolve(patternWithRootPath);

            return isNegativeGlob ? `!${resolvedPattern}` : resolvedPattern;
        }),
    );

    return project;
}
