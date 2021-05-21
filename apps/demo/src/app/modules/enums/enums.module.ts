import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { EnumsComponent } from './enums.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(EnumsComponent)),
  ],
  declarations: [EnumsComponent],
  exports: [EnumsComponent],
})
export class EnumsModule {}
