import type {NgCliProject} from '../classes/ng-cli-project';

let prevProject: NgCliProject = null;

export function setActiveProject(project: NgCliProject): NgCliProject | null {
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
