import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {ACCESSORS_SAMPLES} from './samples/accessors';
import {CONSTRUCTORS_SAMPLES} from './samples/constructors';
import {DECORATORS_SAMPLES} from './samples/decorators';
import {METHODS_SAMPLES} from './samples/methods';
import {PROPERTIES_SAMPLES} from './samples/properties';

const add = `import {
    addClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts']));

addClasses('some/path/file.ts', {
    name: 'A',
    isDefaultExport: true,
    methods: [
      {
        name: 'method',
        isStatic: true,
        statements: 'return 0',
        returnType: 'number',
      },
    ],
});

saveActiveProject();
`;

const edit = `import {
    getClasses,
    editClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classes = getClasses('some/path/file.ts');

editClasses(classes, classEntity => ({
  isExported: true,
  name: classEntity.name.replace('Test', ''),
}));

saveActiveProject();
`;

const remove = `import {
    removeClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

removeClasses(getClasses('**/**', { name: 'A' }));`;

const getClasses = `import {
    getClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const allClassesWithNameB = getClasses('some/path/**.ts', {
    name: 'B',
});

saveActiveProject();
`;

@Component({
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClassesComponent {
    protected readonly add = add;
    protected readonly edit = edit;
    protected readonly remove = remove;
    protected readonly getClasses = getClasses;

    protected readonly accessors = ACCESSORS_SAMPLES;
    protected readonly methods = METHODS_SAMPLES;
    protected readonly properties = PROPERTIES_SAMPLES;
    protected readonly decorators = DECORATORS_SAMPLES;
    protected readonly constructors = CONSTRUCTORS_SAMPLES;
}
