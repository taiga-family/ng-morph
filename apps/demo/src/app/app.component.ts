import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import { TuiLink } from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [HighlightModule, TuiAddonDoc, TuiLink],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
