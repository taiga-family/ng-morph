import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { ClassesComponent } from './classes.component';

@NgModule({
  imports: [
    TuiLinkModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(ClassesComponent)),
  ],
  declarations: [ClassesComponent],
  exports: [ClassesComponent],
})
export class ClassesModule {}
