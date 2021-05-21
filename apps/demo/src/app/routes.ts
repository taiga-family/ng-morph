import { Route } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const ROUTES: Route[] = [
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    data: {
      title: `Getting started`,
    },
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./modules/classes/classes.module').then((m) => m.ClassesModule),
    data: {
      title: `Classes`,
    },
  },
  {
    path: 'interfaces',
    loadChildren: () =>
      import('./modules/interfaces/interfaces.module').then(
        (m) => m.InterfacesModule
      ),
    data: {
      title: `Interfaces`,
    },
  },
  {
    path: 'variables',
    loadChildren: () =>
      import('./modules/variables/variables.module').then(
        (m) => m.VariablesModule
      ),
    data: {
      title: `Variables`,
    },
  },
  {
    path: 'imports-and-exports',
    loadChildren: () =>
      import('./modules/imports-and-exports/imports-and-exports.module').then(
        (m) => m.ImportsAndExportsModule
      ),
    data: {
      title: `Imports and Exports`,
    },
  },
  {
    path: 'enums',
    loadChildren: () =>
      import('./modules/enums/enums.module').then((m) => m.EnumsModule),
    data: {
      title: `Enums`,
    },
  },
  {
    path: 'types',
    loadChildren: () =>
      import('./modules/types/types.module').then((m) => m.TypesModule),
    data: {
      title: `Types`,
    },
  },
  {
    path: 'get-main-module',
    loadChildren: () =>
      import('./modules/get-main-module/get-main-module.module').then(
        (m) => m.GetMainModuleModule
      ),
    data: {
      title: `Get main module`,
    },
  },
  {
    path: 'get-bootstrap-function',
    loadChildren: () =>
      import(
        './modules/get-bootstrap-function/get-bootstrap-function.module'
      ).then((m) => m.GetBootstrapFunctionModule),
    data: {
      title: `Get bootstrap function`,
    },
  },
  {
    path: 'source-files',
    loadChildren: () =>
      import('./modules/source-files/source-files.module').then(
        (m) => m.SourceFilesModule
      ),
    data: {
      title: `Source files`,
    },
  },
  { path: '**', redirectTo: 'getting-started' },
];
