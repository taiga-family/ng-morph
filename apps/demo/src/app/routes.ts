import type {Route} from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: 'getting-started',
        loadChildren: async () =>
            (await import('./getting-started/getting-started.module'))
                .GettingStartedModule,
        data: {
            title: 'Getting started',
        },
    },
    {
        path: 'classes',
        loadChildren: async () =>
            (await import('./modules/classes/classes.module')).ClassesModule,
        data: {
            title: 'Classes',
        },
    },
    {
        path: 'interfaces',
        loadChildren: async () =>
            (await import('./modules/interfaces/interfaces.module')).InterfacesModule,
        data: {
            title: 'Interfaces',
        },
    },
    {
        path: 'variables',
        loadChildren: async () =>
            (await import('./modules/variables/variables.module')).VariablesModule,
        data: {
            title: 'Variables',
        },
    },
    {
        path: 'imports-and-exports',
        loadChildren: async () =>
            (await import('./modules/imports-and-exports/imports-and-exports.module'))
                .ImportsAndExportsModule,
        data: {
            title: 'Imports and Exports',
        },
    },
    {
        path: 'enums',
        loadChildren: async () =>
            (await import('./modules/enums/enums.module')).EnumsModule,
        data: {
            title: 'Enums',
        },
    },
    {
        path: 'functions',
        loadChildren: async () =>
            (await import('./modules/functions/functions.module')).FunctionsModule,
        data: {
            title: 'Functions',
        },
    },
    {
        path: 'types',
        loadChildren: async () =>
            (await import('./modules/types/types.module')).TypesModule,
        data: {
            title: 'Types',
        },
    },
    {
        path: 'get-main-module',
        loadChildren: async () =>
            (await import('./modules/get-main-module/get-main-module.module'))
                .GetMainModuleModule,
        data: {
            title: 'Get main module',
        },
    },
    {
        path: 'get-bootstrap-function',
        loadChildren: async () =>
            (
                await import(
                    './modules/get-bootstrap-function/get-bootstrap-function.module'
                )
            ).GetBootstrapFunctionModule,
        data: {
            title: 'Get bootstrap function',
        },
    },
    {
        path: 'source-files',
        loadChildren: async () =>
            (await import('./modules/source-files/source-files.module'))
                .SourceFilesModule,
        data: {
            title: 'Source files',
        },
    },
    {
        path: 'inject-sample',
        loadChildren: async () =>
            (await import('./modules/inject-sample/inject-sample.module'))
                .InjectSampleModule,
        data: {
            title: '@Inject -> inject example',
        },
    },
    {path: '**', redirectTo: 'getting-started'},
];
