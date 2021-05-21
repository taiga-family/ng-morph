import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    getMainModule
} from 'ng-morph';

const classDeclaration = getMainModule('src/main.ts');
`;


@Component({
  selector: 'get-main-module',
  templateUrl: 'get-main-module.template.html',
  styleUrls: ['./get-main-module.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetMainModuleComponent {
  readonly code = code;
}
