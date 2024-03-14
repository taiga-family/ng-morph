import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    provideAnimations,
} from '@angular/platform-browser/animations';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import {TUI_DOC_LOGO, TUI_DOC_PAGES} from '@taiga-ui/addon-doc';
import {TuiRootModule} from '@taiga-ui/core';

import {AppComponent} from './app/app.component';
import {LOGO_CONTENT} from './app/logo/logo.component';
import {pages} from './app/pages';
import {ROUTES} from './app/routes';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, BrowserAnimationsModule, TuiRootModule),
        provideRouter(ROUTES, withPreloading(PreloadAllModules)),
        {
            provide: TUI_DOC_LOGO,
            useValue: LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: pages,
        },
        provideAnimations(),
    ],
}).catch(e => console.error(e));
