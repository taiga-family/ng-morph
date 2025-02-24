import {normalize} from '@angular-devkit/core';
import {NodeJsSyncHost} from '@angular-devkit/core/node';
import {ScopedHost} from '@angular-devkit/core/src/virtual-fs/host/scoped';
import {HostSink, HostTree} from '@angular-devkit/schematics';
import {firstValueFrom, Observable} from 'rxjs';

export class NgMorphTree extends HostTree {
    private readonly hostSink: HostSink;

    constructor(root: string = process.cwd()) {
        const host = new ScopedHost(new NodeJsSyncHost(), normalize(root));

        super(host);

        this.hostSink = new HostSink(host as any);
    }

    public async commitChanges(): Promise<void> {
        return firstValueFrom(this.hostSink.commit(this) as unknown as Observable<void>);
    }
}
