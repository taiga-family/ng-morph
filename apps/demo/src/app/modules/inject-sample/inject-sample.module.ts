import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiAddonDocModule, tuiGenerateRoutes } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { InjectSampleComponent } from './inject-sample.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(tuiGenerateRoutes(InjectSampleComponent)),
  ],
  declarations: [InjectSampleComponent],
  exports: [InjectSampleComponent],
})
export class InjectSampleModule {}
