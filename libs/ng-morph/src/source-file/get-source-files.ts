import {type SourceFile} from 'ts-morph';

import {getActiveProject} from '../project';

export function getSourceFiles(pattern?: string[] | string): SourceFile[] {
    return getActiveProject()?.getSourceFiles(pattern as string) || [];
}

export function getSourceFile(filePath: string): SourceFile | null {
    return getActiveProject()?.getSourceFile(filePath) ?? null;
}
