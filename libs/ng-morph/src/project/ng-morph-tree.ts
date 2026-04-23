import {normalize} from '@angular-devkit/core';
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
