import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {
    BrowserAnimationsModule,
    provideAnimations,
} from '@angular/platform-browser/animations';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import {TUI_DOC_LOGO, TUI_DOC_PAGES} from '@taiga-ui/addon-doc';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {AppComponent} from './app/app.component';
import {LOGO_CONTENT} from './app/logo';
import {pages} from './app/pages';
import {ROUTES} from './app/routes';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, BrowserAnimationsModule),
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
        NG_EVENT_PLUGINS,
    ],
}).catch((e: unknown) => console.error(e));
