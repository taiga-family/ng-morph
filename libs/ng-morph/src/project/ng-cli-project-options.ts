import type {Tree} from '@angular-devkit/schematics';
import type {ProjectOptions} from 'ts-morph';

export interface NgCliProjectOptions extends Omit<ProjectOptions, 'fileSystem'> {
    host: Tree;
}
