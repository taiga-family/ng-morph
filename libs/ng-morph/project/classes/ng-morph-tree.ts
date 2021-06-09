import { HostTree } from '@angular-devkit/schematics';
import { ScopedHost } from '@angular-devkit/core/src/virtual-fs/host';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { normalize } from '@angular-devkit/core';

export class NgMorphTree extends HostTree {
  constructor(root: string = process.cwd()) {
    super(new ScopedHost(new NodeJsSyncHost(), normalize(root)));
  }
}
