import { jest } from '@jest/globals';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

import { Tree } from '@angular-devkit/schematics';
import { NgMorphTree } from './ng-morph-tree';
import {
  createProject,
  saveActiveProject,
  setActiveProject,
} from 'ng-morph/project';
import { createSourceFile, getSourceFile } from 'ng-morph/source-file';

import fs from 'fs';
import { join } from 'path';

describe('NgMorphTree', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new NgMorphTree(__dirname);

    setActiveProject(createProject(tree));
  });

  it('should create an instance', () => {
    expect(tree).toBeInstanceOf(NgMorphTree);
  });

  it('should read from fs', () => {
    expect(getSourceFile('/ng-morph-tree.ts')?.getFullText())
      .toStrictEqual(`import { HostSink, HostTree } from '@angular-devkit/schematics';
import { ScopedHost } from '@angular-devkit/core/src/virtual-fs/host/scoped';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { normalize } from '@angular-devkit/core';

export class NgMorphTree extends HostTree {
  private hostSink: HostSink;

  constructor(root: string = process.cwd()) {
    const host = new ScopedHost(new NodeJsSyncHost(), normalize(root));
    super(host);

    this.hostSink = new HostSink(host as any);
  }

  commitChanges(): Promise<void> {
    return this.hostSink.commit(this).toPromise();
  }
}
`);
  });

  it('should write to fs', () => {
    createSourceFile('__file.ts', `content`, { overwrite: true });

    const spy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      // empty
    });

    saveActiveProject();

    expect(spy).toHaveBeenCalledWith(
      join(__dirname, '__file.ts'),
      Uint8Array.from([99, 111, 110, 116, 101, 110, 116]),
    );

    spy.mockRestore();
  });
});
