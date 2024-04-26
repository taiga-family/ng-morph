import type {Tree} from '@angular-devkit/schematics';

import type {Pattern} from '../../utils';
import type {DevkitFileSystem} from '../classes/devkit-file-system';
import {createProject} from './create-project';
import {setActiveProject} from './project';
import {projectRoot} from './project-root';

export function getFileSystem(tree: Tree, pattern: Pattern): DevkitFileSystem {
    const project = createProject(tree, projectRoot(), pattern);

    setActiveProject(project);

    return project.getFileSystem().fs;
}
