import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { GetMainModuleComponent } from './get-main-module.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(GetMainModuleComponent)),
  ],
  declarations: [GetMainModuleComponent],
  exports: [GetMainModuleComponent],
})
export class GetMainModuleModule {}
