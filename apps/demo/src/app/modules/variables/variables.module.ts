import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { VariablesComponent } from './variables.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(VariablesComponent)),
  ],
  declarations: [VariablesComponent],
  exports: [VariablesComponent],
})
export class VariablesModule {}
