import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { InterfacesComponent } from './interfaces.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InterfacesComponent)),
  ],
  declarations: [InterfacesComponent],
  exports: [InterfacesComponent],
})
export class InterfacesModule {}
