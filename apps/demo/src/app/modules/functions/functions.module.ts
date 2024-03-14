import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {FunctionsComponent} from './functions.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(FunctionsComponent)),
    ],
    declarations: [FunctionsComponent],
    exports: [FunctionsComponent],
})
export class FunctionsModule {}
