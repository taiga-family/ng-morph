import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiAddonDocModule, tuiGenerateRoutes } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { TypesComponent } from './types.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(tuiGenerateRoutes(TypesComponent)),
  ],
  declarations: [TypesComponent],
  exports: [TypesComponent],
})
export class TypesModule {}
