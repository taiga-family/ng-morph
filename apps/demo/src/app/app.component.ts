import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

@Component({
    selector: 'app-root',
    imports: [HighlightModule, TuiAddonDoc, TuiLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
