import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { TypesComponent } from './types.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(TypesComponent)),
  ],
  declarations: [TypesComponent],
  exports: [TypesComponent],
})
export class TypesModule {}
