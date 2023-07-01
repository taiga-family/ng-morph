import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { InjectSampleComponent } from './inject-sample.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InjectSampleComponent)),
  ],
  declarations: [InjectSampleComponent],
  exports: [InjectSampleComponent],
})
export class InjectSampleModule {}
