import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {SourceFilesComponent} from './source-files.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(SourceFilesComponent)),
    ],
    declarations: [SourceFilesComponent],
    exports: [SourceFilesComponent],
})
export class SourceFilesModule {}
