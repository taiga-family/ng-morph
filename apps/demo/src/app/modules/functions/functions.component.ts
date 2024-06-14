import {ChangeDetectionStrategy, Component} from '@angular/core';

const code = `import {
    addFunctions,
    editFunctions,
    getFunctions,
    removeFunctions,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addFunctions('some/**/**.ts', {
    isExported: true,
    name: 'b',
    statements: "return 'b'",
});

const declarations = getFunctions('some/path/**.ts');

editFunctions(functions, () => ({
    isExported: true,
    name: 'b',
    statements: "return 'b'",
}));

removeFunctions(declarations);

saveActiveProject();
`;

@Component({
    selector: 'functions',
    templateUrl: './functions.template.html',
    styleUrls: ['./functions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionsComponent {
    protected readonly code = code;
}
