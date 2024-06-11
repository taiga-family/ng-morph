import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [TuiDocMainModule, TuiLinkModule, HighlightModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
