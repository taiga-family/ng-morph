import type {Tree} from '@angular-devkit/schematics';
import type {WorkspaceProject} from '@schematics/angular/utility/workspace-models';

import {ANGULAR_PATH} from './consts';
import {JSONFile} from './json-file';

export function getProjectTargets(
    host: Tree,
    angularJsonPath: string = ANGULAR_PATH,
): Map<string, WorkspaceProject> {
    const file = new JSONFile(host, angularJsonPath);

    const projects = file.get(['projects']);

    if (projects) {
        return new Map(Object.entries(projects) as Array<[string, any]>);
    }

    return new Map();
}

export function getProjectTarget(
    host: Tree,
    name: string,
    angularJsonPath: string = ANGULAR_PATH,
): WorkspaceProject | null {
    const file = new JSONFile(host, angularJsonPath);

    return (file.get(['projects', name]) as any) ?? null;
}
