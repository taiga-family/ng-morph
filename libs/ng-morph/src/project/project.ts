import {type NgCliProject} from './ng-cli-project';

let prevProject: NgCliProject | null = null;

export function setActiveProject(project: NgCliProject | null): NgCliProject | null {
    const prev = prevProject;

    prevProject = project;

    return prev;
}

export function getActiveProject(): NgCliProject | null {
    return prevProject;
}

export function resetActiveProject(): NgCliProject | null {
    return setActiveProject(null);
}
