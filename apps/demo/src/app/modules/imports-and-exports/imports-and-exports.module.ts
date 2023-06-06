import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { tuiGenerateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { ImportsAndExportsComponent } from './imports-and-exports.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(tuiGenerateRoutes(ImportsAndExportsComponent)),
  ],
  declarations: [ImportsAndExportsComponent],
  exports: [ImportsAndExportsComponent],
})
export class ImportsAndExportsModule {}
