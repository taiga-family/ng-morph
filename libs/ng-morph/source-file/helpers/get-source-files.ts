import {getActiveProject} from 'ng-morph/project';
import type {SourceFile} from 'ts-morph';

export function getSourceFiles(pattern?: string[] | string): SourceFile[] {
    return getActiveProject().getSourceFiles(pattern as string);
}

export function getSourceFile(filePath: string): SourceFile | null {
    return getActiveProject().getSourceFile(filePath) ?? null;
}
