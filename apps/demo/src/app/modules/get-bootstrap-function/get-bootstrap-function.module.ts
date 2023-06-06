import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { tuiGenerateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { GetBootstrapFunctionComponent } from './get-bootstrap-function.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(tuiGenerateRoutes(GetBootstrapFunctionComponent)),
  ],
  declarations: [GetBootstrapFunctionComponent],
  exports: [GetBootstrapFunctionComponent],
})
export class GetBootstrapFunctionModule {}
