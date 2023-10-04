import { ANGULAR_PATH } from '../consts';
import { WorkspaceProject } from '@schematics/angular/utility/workspace-models';
import { Tree } from '@angular-devkit/schematics';
import { JSONFile } from '../classes/json-file';

export function getProjectTargets(
  host: Tree,
  angularJsonPath: string = ANGULAR_PATH,
): Map<string, WorkspaceProject> {
  const file = new JSONFile(host, angularJsonPath);

  const projects = file.get(['projects']);

  if (projects) {
    return new Map(Object.entries(projects));
  }

  return new Map();
}

export function getProjectTarget(
  host: Tree,
  name: string,
  angularJsonPath: string = ANGULAR_PATH,
): WorkspaceProject | null {
  const file = new JSONFile(host, angularJsonPath);

  const project = file.get(['projects', name]) as WorkspaceProject;

  return project ?? null;
}
