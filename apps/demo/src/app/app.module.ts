import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TUI_DOC_LOGO, TUI_DOC_PAGES, TuiDocMainModule } from '@taiga-ui/addon-doc';
import { TuiLinkModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LOGO_CONTENT } from './logo/logo.component';
import { pages } from './pages';
import { GettingStartedModule } from './getting-started/getting-started.module';
import { ROUTES } from './routes';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export const HIGHLIGHT_OPTIONS_VALUE = {
  coreLibraryLoader: () => import('highlight.js/lib/core'),
  lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
  languages: {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    less: () => import('highlight.js/lib/languages/less'),
    xml: () => import('highlight.js/lib/languages/xml'),
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiDocMainModule,
    TuiLinkModule,
    GettingStartedModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    {
      provide: TUI_DOC_LOGO,
      useValue: LOGO_CONTENT,
    },
    {
      provide: TUI_DOC_PAGES,
      useValue: pages,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: HIGHLIGHT_OPTIONS_VALUE,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
