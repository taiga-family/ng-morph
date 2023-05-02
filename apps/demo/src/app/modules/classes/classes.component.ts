import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACCESSORS_SAMPLES } from './samples/accessors';
import { CONSTRUCTORS_SAMPLES } from './samples/contructors';
import { DECORATORS_SAMPLES } from './samples/decorators';
import { METHODS_SAMPLES } from './samples/methods';
import { PROPERTIES_SAMPLES } from './samples/properties';

const add = `import {
    addClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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
  selector: 'classes',
  templateUrl: 'classes.template.html',
  styleUrls: ['./classes.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassesComponent {
  readonly add = add;
  readonly edit = edit;
  readonly remove = remove;
  readonly getClasses = getClasses;

  readonly accessors = ACCESSORS_SAMPLES;
  readonly methods = METHODS_SAMPLES;
  readonly properties = PROPERTIES_SAMPLES;
  readonly decorators = DECORATORS_SAMPLES;
  readonly constructors = CONSTRUCTORS_SAMPLES;
}
