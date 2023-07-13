import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiAddonDocModule, tuiGenerateRoutes } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { EnumsComponent } from './enums.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(tuiGenerateRoutes(EnumsComponent)),
  ],
  declarations: [EnumsComponent],
  exports: [EnumsComponent],
})
export class EnumsModule {}
