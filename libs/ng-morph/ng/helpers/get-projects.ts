import type {workspaces} from '@angular-devkit/core';

export function getProjects<T extends {readonly project: string}>(
    options: T,
    workspace: workspaces.WorkspaceDefinition,
): workspaces.ProjectDefinition[] {
    const projects = Array.from(workspace.projects.entries())
        .filter(([_, project]) => project.targets.get('build'))
        .map(([_, project]) => project);

    const nameFromContext =
        options.project || workspace.extensions.defaultProject?.toString() || '';
    const projectFromContext = workspace.projects.get(nameFromContext);

    return projectFromContext ? [projectFromContext] : projects;
}
