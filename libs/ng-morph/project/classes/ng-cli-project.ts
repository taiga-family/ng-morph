import { Project } from 'ts-morph';
import { NgCliProjectOptions } from '../types/ng-cli-project-options';
import { DevkitFileSystem } from './devkit-file-system';
import { NgCliFileSystem } from './file-system';

export class NgCliProject extends Project {
  constructor({ host, ...options }: NgCliProjectOptions) {
    super({
      ...options,
      fileSystem: new NgCliFileSystem(new DevkitFileSystem(host)),
    });
  }

  getFileSystem(): NgCliFileSystem {
    return super.getFileSystem() as NgCliFileSystem;
  }
}
