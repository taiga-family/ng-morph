import {Project} from 'ts-morph';

import type {NgCliProjectOptions} from '../types/ng-cli-project-options';
import {DevkitFileSystem} from './devkit-file-system';
import {NgCliFileSystem} from './file-system';
import {NgMorphTree} from './ng-morph-tree';

export class NgCliProject extends Project {
    constructor({host, ...options}: NgCliProjectOptions) {
        super({
            ...options,
            fileSystem: new NgCliFileSystem(new DevkitFileSystem(host)),
        });
    }

    public override getFileSystem(): NgCliFileSystem {
        return super.getFileSystem() as NgCliFileSystem;
    }

    public override async save(): Promise<void> {
        await super.save();
        await this.trySaveTree();
    }

    public override saveSync(): void {
        super.saveSync();
        void this.trySaveTree();
    }

    private async trySaveTree(): Promise<void> {
        const tree = this.getFileSystem().fs.tree;

        if (tree instanceof NgMorphTree) {
            await tree.commitChanges();
        }
    }
}
