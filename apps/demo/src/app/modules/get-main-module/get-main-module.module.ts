import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {GetMainModuleComponent} from './get-main-module.component';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(GetMainModuleComponent)),
    ],
    declarations: [GetMainModuleComponent],
    exports: [GetMainModuleComponent],
})
export class GetMainModuleModule {}
