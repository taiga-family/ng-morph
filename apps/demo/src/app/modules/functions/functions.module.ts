import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { FunctionsComponent } from './functions.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(FunctionsComponent)),
  ],
  declarations: [FunctionsComponent],
  exports: [FunctionsComponent],
})
export class FunctionsModule {}
