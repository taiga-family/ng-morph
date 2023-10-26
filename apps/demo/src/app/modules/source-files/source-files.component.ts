import {ChangeDetectionStrategy, Component} from '@angular/core';

const code = `import {
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

createSourceFile('some/path/file.ts', 'const a = "hello";');

const sourceFiles = getSourceFiles('some/**/*.ts');

// It gets a function that process every file
moveSourceFilePaths(sourceFiles, dasherize);

saveActiveProject();
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
