import { ProjectOptions } from 'ts-morph';
import { Tree } from '@angular-devkit/schematics';

export interface NgCliProjectOptions
  extends Omit<ProjectOptions, 'fileSystem'> {
  host: Tree;
}
