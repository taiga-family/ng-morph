import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

@Component({
    standalone: true,
    selector: 'ng-morph-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiDocMainModule, TuiLinkModule, HighlightModule],
})
export class AppComponent {}
