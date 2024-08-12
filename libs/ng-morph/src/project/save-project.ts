import {getActiveProject} from './project';

export async function saveActiveProjectAsync(): Promise<void> {
    await getActiveProject()?.save();
}

export function saveActiveProject(): void {
    getActiveProject()?.saveSync();
}
