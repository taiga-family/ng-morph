import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    getBootstrapFn
} from 'ng-morph';

const bootstrapFn = getBootstrapFn('src/main.ts');
`;


@Component({
  selector: 'get-bootstrap-function',
  templateUrl: './get-bootstrap-function.template.html',
  styleUrls: ['./get-bootstrap-function.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetBootstrapFunctionComponent {
  readonly code = code;
}
