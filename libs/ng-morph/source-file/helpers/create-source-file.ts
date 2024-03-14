import {getActiveProject} from 'ng-morph/project';
import type {SourceFile} from 'ts-morph';

export function createSourceFile(
    filePath: string,
    content?: string,
    {overwrite = false}: {overwrite?: boolean} = {},
): SourceFile {
    return getActiveProject().createSourceFile(filePath, content, {overwrite});
}
