import type {Route} from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: 'getting-started',
        data: {title: 'Getting started'},
        loadComponent: async () => import('./getting-started'),
    },
    {
        path: 'classes',
        data: {title: 'Classes'},
        loadComponent: async () => import('./pages/classes'),
    },
    {
        path: 'interfaces',
        data: {title: 'Interfaces'},
        loadComponent: async () => import('./pages/interfaces'),
    },
    {
        path: 'variables',
        data: {title: 'Variables'},
        loadComponent: async () => import('./pages/variables'),
    },
    {
        path: 'imports-and-exports',
        data: {title: 'Imports and Exports'},
        loadComponent: async () => import('./pages/imports-and-exports'),
    },
    {
        path: 'enums',
        data: {title: 'Enums'},
        loadComponent: async () => import('./pages/enums'),
    },
    {
        path: 'functions',
        data: {title: 'Functions'},
        loadComponent: async () => import('./pages/functions'),
    },
    {
        path: 'types',
        data: {title: 'Types'},
        loadComponent: async () => import('./pages/types'),
    },
    {
        path: 'get-main-module',
        data: {title: 'Get main module'},
        loadComponent: async () => import('./pages/get-main-module'),
    },
    {
        path: 'get-bootstrap-function',
        data: {title: 'Get bootstrap function'},
        loadComponent: async () => import('./pages/get-bootstrap-function'),
    },
    {
        path: 'source-files',
        data: {title: 'Source files'},
        loadComponent: async () => import('./pages/source-files'),
    },
    {
        path: 'inject-sample',
        data: {title: '@Inject -> inject example'},
        loadComponent: async () => import('./pages/inject-sample'),
    },
    {path: '**', redirectTo: 'getting-started'},
];
