import { ChangeDetectionStrategy, Component } from '@angular/core';

const code = `import {
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
} from 'ng-morph';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

createSourceFile('some/path/file.ts', 'const a = "hello";');

const sourceFiles = getSourceFiles('some/**/*.ts');

// It gets a function that process every file
moveSourceFilePaths(sourceFiles, dasherize);
`;

@Component({
  selector: 'source-files',
  templateUrl: './source-files.template.html',
  styleUrls: ['./source-files.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceFilesComponent {
  readonly code = code;
}
