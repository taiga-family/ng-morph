import type {SourceFile} from 'ts-morph';

import {getActiveProject} from '../project';

export function createSourceFile(
    filePath: string,
    content?: string,
    {overwrite = false}: {overwrite?: boolean} = {},
): SourceFile | undefined {
    return getActiveProject()?.createSourceFile(filePath, content, {overwrite});
}
