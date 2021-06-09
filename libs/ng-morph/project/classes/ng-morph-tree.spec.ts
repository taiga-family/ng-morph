import { Tree } from '@angular-devkit/schematics';
import { NgMorphTree } from 'ng-morph/project/classes/ng-morph-tree';
import { createProject, setActiveProject } from 'ng-morph/project';
import { getSourceFile } from 'ng-morph/source-file';

describe('NgMorphTree', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new NgMorphTree();

    setActiveProject(createProject(tree));
  });

  it('should create an instance', () => {
    expect(tree).toBeInstanceOf(NgMorphTree);
  });

  it('should read from fs', () => {
    expect(getSourceFile('/ng-morph-tree.ts')?.getFullText())
      .toStrictEqual(`import { HostTree } from '@angular-devkit/schematics';
import { ScopedHost } from '@angular-devkit/core/src/virtual-fs/host';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { normalize } from '@angular-devkit/core';

export class NgMorphTree extends HostTree {
  constructor(root: string = __dirname) {
    super(new ScopedHost(new NodeJsSyncHost(), normalize(root)));
  }
}
`);
  });
});
