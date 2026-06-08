import {HostTree} from '@angular-devkit/schematics';
import {UnitTestTree} from '@angular-devkit/schematics/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {
    createProject,
    createSourceFile,
    getSourceFiles,
    type Pattern,
    resetActiveProject,
    setActiveProject,
} from 'ng-morph';

const TAIGA_EXCLUDE_DIRECTORIES = [
    'e2e',
    'scripts',
    'dist',
    'node_modules',
    'coverage',
    'dll',
    'tmp',
    '__build__',
    'allure-results',
    '.rpt2_cache',
    '.husky',
    '.vscode',
    '.idea',
    '.github',
    '.gitlab',
    '.devplatform',
    '.angular',
    '.tmp',
    '.nx',
] as const;

const TAIGA_EXCLUDE_FILE_PATTERNS = [
    '*__name@dasherize__*',
    '*__name@camelize__*',
    '*__name@underscore__*',
    '*.d',
] as const;

const TAIGA_STYLE_EXTENSIONS = '{less,sass,scss,css}';
const TAIGA_ALL_EXTENSIONS = '{html,ts,less,sass,scss,css,json}';

const TAIGA_EXCLUDE_DIRECTORY_PATTERNS = TAIGA_EXCLUDE_DIRECTORIES.map(
    (directory) => `!**/${directory}/**`,
);

const TAIGA_ALL_STYLE_FILES: Pattern = [
    `**/*.${TAIGA_STYLE_EXTENSIONS}`,
    ...TAIGA_EXCLUDE_DIRECTORY_PATTERNS,
    ...TAIGA_EXCLUDE_FILE_PATTERNS.map(
        (filePattern) => `!**/${filePattern}.${TAIGA_STYLE_EXTENSIONS}`,
    ),
];

const TAIGA_ALL_TS_FILES: Pattern = [
    '**/*.ts',
    ...TAIGA_EXCLUDE_DIRECTORY_PATTERNS,
    ...TAIGA_EXCLUDE_FILE_PATTERNS.map((filePattern) => `!**/${filePattern}.ts`),
];

const TAIGA_ALL_FILES: Pattern = [
    `**/*.${TAIGA_ALL_EXTENSIONS}`,
    ...TAIGA_EXCLUDE_DIRECTORY_PATTERNS,
    ...TAIGA_EXCLUDE_FILE_PATTERNS.map(
        (filePattern) => `!**/${filePattern}.${TAIGA_ALL_EXTENSIONS}`,
    ),
];

const TAIGA_PROJECT_JSON_FILES: Pattern = [
    'project.json',
    'angular.json',
    '**/project.json',
    '**/angular.json',
    ...TAIGA_EXCLUDE_DIRECTORY_PATTERNS,
];

describe('getSourceFiles', () => {
    let host: UnitTestTree;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());

        setActiveProject(createProject(host));

        createSourceFile('test.ts', '');
        createSourceFile('some/test.ts', '');
        createSourceFile('some/path/test.ts', '');
    });

    it('should find all source files', () => {
        const sourceFiles = getSourceFiles('some/**/*.ts');

        expect(sourceFiles.length).toBe(2);
    });

    it('should find three source files', () => {
        const sourceFiles = getSourceFiles('**/*.ts');

        expect(sourceFiles.length).toBe(3);
    });

    it('should find one source file', () => {
        const sourceFiles = getSourceFiles('some/test.ts');

        expect(sourceFiles.length).toBe(1);
    });

    it('should preserve negative glob patterns when creating project from root path', () => {
        host.create('/some/test.ts', '');
        host.create('/some/path/test.ts', '');
        host.create('/some/coverage/test.ts', '');

        setActiveProject(createProject(host, '/some', ['**/*.ts', '!**/coverage/**']));

        expect(
            getSourceFiles('**/*.ts')
                .map((file) => file.getFilePath())
                .sort(),
        ).toEqual(['/some/path/test.ts', '/some/test.ts']);
    });

    it('should preserve absolute glob patterns when creating project from root path', () => {
        host.create('/some/test.ts', '');
        host.create('/some/path/test.ts', '');
        host.create('/some/coverage/test.ts', '');

        setActiveProject(createProject(host, '/some', ['/some/**/*.ts']));

        expect(
            getSourceFiles('**/*.ts')
                .map((file) => file.getFilePath())
                .sort(),
        ).toEqual(['/some/coverage/test.ts', '/some/path/test.ts', '/some/test.ts']);
    });

    it('should preserve absolute negative glob patterns when creating project from root path', () => {
        host.create('/some/test.ts', '');
        host.create('/some/path/test.ts', '');
        host.create('/some/coverage/test.ts', '');

        setActiveProject(createProject(host, '/some', ['**/*.ts', '!/some/coverage/**']));

        expect(
            getSourceFiles('**/*.ts')
                .map((file) => file.getFilePath())
                .sort(),
        ).toEqual(['/some/path/test.ts', '/some/test.ts']);
    });

    it('should treat extglob patterns as positive patterns', () => {
        host.create('/test.ts', '');
        host.create('/some/test.ts', '');
        host.create('/some/path/test.ts', '');
        host.create('/coverage/test.ts', '');

        const project = createProject(host, '/', []);

        const filePaths = project
            .getFileSystem()
            .globSync(['!(coverage)/**/*.ts'])
            .sort();

        expect(filePaths).toEqual([
            '/coverage/test.ts',
            '/some/path/test.ts',
            '/some/test.ts',
            '/test.ts',
        ]);
    });

    it('should recursively add directories with repeated names', () => {
        host.create('/abc/def/abc/test.ts', '');

        const project = createProject(host, '/', []);

        project.addDirectoryAtPath('/abc', {recursive: true});

        expect(
            project
                .getDirectoryOrThrow('/abc')
                .getDescendantDirectories()
                .map((directory) => directory.getPath())
                .sort(),
        ).toEqual(['/abc/def', '/abc/def/abc']);
    });

    describe('Taiga-like glob patterns', () => {
        const projectRoot = '/workspace';

        it('should support TypeScript files with nested excluded directories', () => {
            host.create('/workspace/src/app.ts', '');
            host.create('/workspace/libs/lib-a/src/index.ts', '');
            host.create('/workspace/libs/lib-a/coverage/generated.ts', '');
            host.create('/workspace/libs/lib-a/node_modules/pkg/index.ts', '');
            host.create('/workspace/dist/out.ts', '');
            host.create('/workspace/src/input__name@dasherize__.ts', '');
            host.create('/workspace/src/model.d.ts', '');

            setActiveProject(createProject(host, projectRoot, TAIGA_ALL_TS_FILES));

            expect(
                getSourceFiles('**/*.ts')
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual(['/workspace/libs/lib-a/src/index.ts', '/workspace/src/app.ts']);
        });

        it('should support style files with nested excluded directories', () => {
            host.create('/workspace/src/app.less', '');
            host.create('/workspace/libs/lib-a/src/card.scss', '');
            host.create('/workspace/libs/lib-a/coverage/generated.css', '');
            host.create('/workspace/libs/lib-a/.nx/cache.css', '');
            host.create('/workspace/tmp/temp.sass', '');
            host.create('/workspace/src/input__name@camelize__.scss', '');

            const project = createProject(host, projectRoot, TAIGA_ALL_STYLE_FILES);

            expect(
                project
                    .getSourceFiles()
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual(['/workspace/libs/lib-a/src/card.scss', '/workspace/src/app.less']);
        });

        it('should support all migration files with nested excluded directories', () => {
            host.create('/workspace/src/app.html', '');
            host.create('/workspace/src/app.ts', '');
            host.create('/workspace/src/app.less', '');
            host.create('/workspace/src/config.json', '');
            host.create('/workspace/libs/lib-a/coverage/report.html', '');
            host.create('/workspace/libs/lib-a/.angular/cache.json', '');
            host.create('/workspace/libs/lib-a/node_modules/pkg/index.ts', '');
            host.create('/workspace/src/input__name@underscore__.html', '');
            host.create('/workspace/src/model.d.ts', '');

            const project = createProject(host, projectRoot, TAIGA_ALL_FILES);

            expect(
                project
                    .getSourceFiles()
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual([
                '/workspace/src/app.html',
                '/workspace/src/app.less',
                '/workspace/src/app.ts',
                '/workspace/src/config.json',
            ]);
        });

        it('should support project json files with nested excluded directories', () => {
            host.create('/workspace/project.json', '');
            host.create('/workspace/angular.json', '');
            host.create('/workspace/libs/lib-a/project.json', '');
            host.create('/workspace/libs/lib-b/angular.json', '');
            host.create('/workspace/libs/lib-a/coverage/project.json', '');
            host.create('/workspace/libs/lib-a/.nx/project.json', '');
            host.create('/workspace/dist/project.json', '');

            const project = createProject(host, projectRoot, TAIGA_PROJECT_JSON_FILES);

            expect(
                project
                    .getSourceFiles()
                    .map((file) => file.getFilePath())
                    .sort(),
            ).toEqual([
                '/workspace/angular.json',
                '/workspace/libs/lib-a/project.json',
                '/workspace/libs/lib-b/angular.json',
                '/workspace/project.json',
            ]);
        });
    });

    afterEach(() => {
        resetActiveProject();
    });
});
