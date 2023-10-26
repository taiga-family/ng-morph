import {HostSink, HostTree} from '@angular-devkit/schematics';
import {ScopedHost} from '@angular-devkit/core/src/virtual-fs/host/scoped';
import {NodeJsSyncHost} from '@angular-devkit/core/node';
import {normalize} from '@angular-devkit/core';

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
