import fs from 'node:fs';
import {join} from 'node:path';
import {URL} from 'node:url';

import type {Tree} from '@angular-devkit/schematics';
import {jest} from '@jest/globals';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph/project';
import {createSourceFile, getSourceFile} from 'ng-morph/source-file';

import {NgMorphTree} from './ng-morph-tree';

const dirname = new URL('.', import.meta.url).pathname;

describe('NgMorphTree', () => {
    let tree: Tree;

    beforeEach(() => {
        tree = new NgMorphTree(dirname);

        setActiveProject(createProject(tree));
    });

    it('should create an instance', () => {
        expect(tree).toBeInstanceOf(NgMorphTree);
    });

    it('should read from fs', () => {
        expect(getSourceFile('/ng-morph-tree.ts')?.getFullText())
            .toBe(`import {normalize} from '@angular-devkit/core';
import {NodeJsSyncHost} from '@angular-devkit/core/node';
import {ScopedHost} from '@angular-devkit/core/src/virtual-fs/host/scoped';
import {HostSink, HostTree} from '@angular-devkit/schematics';
import {firstValueFrom} from 'rxjs';

export class NgMorphTree extends HostTree {
    private readonly hostSink: HostSink;

    constructor(root: string = process.cwd()) {
        const host = new ScopedHost(new NodeJsSyncHost(), normalize(root));

        super(host);

        this.hostSink = new HostSink(host as any);
    }

    public async commitChanges(): Promise<void> {
        return firstValueFrom(this.hostSink.commit(this));
    }
}
`);
    });

    it('should write to fs', () => {
        createSourceFile('__file.ts', 'content', {overwrite: true});

        const spy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            // empty
        });

        saveActiveProject();

        expect(spy).toHaveBeenCalledWith(
            join(dirname, '__file.ts'),
            Uint8Array.from([99, 111, 110, 116, 101, 110, 116]),
        );

        spy.mockRestore();
    });
});
