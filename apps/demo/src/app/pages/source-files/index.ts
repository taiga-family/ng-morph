import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocCodeModule, TuiDocPageModule} from '@taiga-ui/addon-doc';

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
    standalone: true,
    imports: [TuiDocCodeModule, TuiDocPageModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SourceFilesComponent {
    protected readonly code = code;
}
