import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    editDecorators,
    getClasses,
    getDecorators,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

describe('editDecorators', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
@Component({
  selector: 'a'
})
class A{

}
    `,
        );
    });

    it('should edit decorators', () => {
        const declarations = getDecorators(getClasses('some/path/file.ts'));

        editDecorators(declarations, () => ({name: 'Directive'}));

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
@Directive({
      selector: 'a'
    })
class A{

}
    `);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
