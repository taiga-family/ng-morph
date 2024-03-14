import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocCodeModule, TuiDocPageModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {GettingStartedComponent} from './getting-started.component';

@NgModule({
    imports: [
        CommonModule,
        TuiDocPageModule,
        TuiLinkModule,
        TuiDocCodeModule,
        RouterModule,
        RouterModule.forChild(tuiGenerateRoutes(GettingStartedComponent)),
    ],
    declarations: [GettingStartedComponent],
    exports: [GettingStartedComponent],
})
export class GettingStartedModule {}
