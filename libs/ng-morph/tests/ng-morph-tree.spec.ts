import fs from 'node:fs';
import {join} from 'node:path';

import {type Tree} from '@angular-devkit/schematics';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getSourceFile,
    NgMorphTree,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const dirname = join(process.cwd(), 'libs/ng-morph/src/project');

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
import {FilterHostTree, HostSink, HostTree} from '@angular-devkit/schematics';
import {minimatch} from 'minimatch';
import {firstValueFrom} from 'rxjs';

const DEFAULT_IGNORE_PATTERNS = [
    '**/node_modules/**',
    '**/.git/**',
    '**/.nx/**',
    '**/dist/**',
    '**/build/**',
    '**/.cache/**',
    '**/tmp/**',
    '**/temp/**',
    '**/*.log',
];

export class NgMorphTree extends FilterHostTree {
    private readonly hostSink: HostSink;

    constructor(root: string = process.cwd(), ignores = DEFAULT_IGNORE_PATTERNS) {
        const host = new ScopedHost(new NodeJsSyncHost(), normalize(root));
        const tree = new HostTree(host);

        super(tree, (path) => !ignores.some((pattern) => minimatch(path, pattern)));

        this.hostSink = new HostSink(host);
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

    it('should filter out files matching default ignore patterns', () => {
        const treeWithIgnores = new NgMorphTree(dirname);

        const allFiles: string[] = [];

        treeWithIgnores.visit((path) => {
            allFiles.push(path.toString());
        });

        allFiles.forEach((file) => {
            expect(file).not.toMatch(/node_modules/);
            expect(file).not.toMatch(/\.git/);
            expect(file).not.toMatch(/\.nx/);
            expect(file).not.toMatch(/\.log$/);
        });
    });

    it('should filter out files matching custom ignore patterns', () => {
        const customIgnorePatterns = ['**/*.spec.ts', '**/tests/**'];
        const treeWithCustomIgnores = new NgMorphTree(dirname, customIgnorePatterns);

        const allFiles: string[] = [];

        treeWithCustomIgnores.visit((path) => {
            allFiles.push(path.toString());
        });

        allFiles.forEach((file) => {
            expect(file).not.toMatch(/\.spec\.ts$/);
        });
    });

    it('should allow empty ignore patterns', () => {
        const treeWithoutIgnores = new NgMorphTree(dirname, []);

        expect(treeWithoutIgnores).toBeInstanceOf(NgMorphTree);
    });
});
