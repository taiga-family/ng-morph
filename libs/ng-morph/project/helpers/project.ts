import { NgCliProject } from '../classes/ng-cli-project';

let _project: NgCliProject = null;

export function setActiveProject(project: NgCliProject): NgCliProject | null {
  const prev = _project;
  _project = project;
  return prev;
}

export function getActiveProject(): NgCliProject | null {
  return _project;
}

export function resetActiveProject(): NgCliProject | null {
  return setActiveProject(null);
}
