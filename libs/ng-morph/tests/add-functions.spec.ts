import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    addFunctions,
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from '@taiga-ui/morph';

describe('addFunctions', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile(
            'some/path/file.ts',
            `
function a(){
  return 'a'
}
`,
        );
    });

    it('should add a function', () => {
        addFunctions('some/**/**.ts', {
            isExported: true,
            name: 'b',
            statements: "return 'b'",
        });

        saveActiveProject();

        expect(host.readContent('some/path/file.ts')).toBe(`
function a(){
  return 'a'
}
export function b() {
    return 'b'
}
`);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
