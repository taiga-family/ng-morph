import{G as d,M as p,Q as u,T as h,i as a,k as m,n as s,o as i,p as t,q as n,u as e}from"./chunk-FXTWYKQG.js";var f=`import {
  setActiveProject,
  createProject,
  getImports,
  NgMorphTree,
} from 'ng-morph';

/**
 * set all ng-morph functions to work with the all TS and JSON files
 * of the current project
 * */
setActiveProject(
  createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json'])
);

/**
 * This simple migration gets all imports from the project TS files and
 * replaces 'old' substring with 'new'
 * */
const imports = getImports('some/path/**.ts', {
    moduleSpecifier: '@morph-old*',
});

editImports(imports, importEntity => ({
    moduleSpecifier: importEntity.moduleSpecifier.replace('old', 'new')
}));

/**
 * All changes are made in a virtual project.
 * You can save them when it is time
 * */
saveActiveProject();
`,S=`import {
    setActiveProject,
    saveActiveProject,
    createProject,
    getImports,
    editImports,
} from 'ng-morph';

export default (): Rule => {
    return tree => {
        /**
         * set all ng-morph functions to work with the all TS and JSON files
         * of the current project
         * */
        setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

        /**
         * This function gets all imports from the project TS files and
         * replaces 'old' substring with 'new'
         * */
        const imports = getImports('some/path/**.ts', {
            moduleSpecifier: '@morph-old*',
        });

        editImports(imports, importEntity => ({
            moduleSpecifier: importEntity.moduleSpecifier.replace('old', 'new')
        }));

        /**
         * All changes are made in a virtual project.
         * You can save them when it is time
         * */
        saveActiveProject();
    };
};`,w=`
// We use schematics devkit to emulate virtual Tree
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {HostTree} from '@angular-devkit/schematics';

// We can emulate filesystem with ng-morph
import {
    createProject,
    resetActiveProject,
    setActiveProject,
    createSourceFile,
    saveActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../collection.json');

describe('ng-add', () => {
    describe('removes old postfix', () => {
        let host: UnitTestTree;
        let runner: SchematicTestRunner;

        beforeEach(() => {
            host = new UnitTestTree(new HostTree());
            runner = new SchematicTestRunner('schematics', collectionPath);

            // preparing virtual file tree with one file
            setActiveProject(createProject(host));

            createSourceFile(
                'src/module.ts',
                "import {a} from '@morph-old/core';",
            );

            saveActiveProject();
        });

        it('should replace old with new in TS imports', async () => {
            expect.assertions(1);

            // Our migration returns Tree
            const tree = await runner.runSchematicAsync('ng-add', {}, host).toPromise();

            expect(tree.readContent('src/module.ts')).toEqual(
                "import {a} from '@morph-new/core';",
            );
        });

        afterEach(() => {
            // clear it up
            resetActiveProject();
        });
    });
});
`,r=class r{constructor(){this.script=f;this.creatingRule=S;this.creatingSpec=w}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=m({type:r,selectors:[["getting-started"]],decls:83,vars:3,consts:[["header","Getting started"],["href","https://ts-morph.com/","tuiLink",""],["code","npm i --save-dev ng-morph"],["filename","script.ts",3,"code"],["href","https://www.npmjs.com/package/ts-node","rel","noreferrer","target","_blank","tuiLink",""],["href","https://angular.io/guide/schematics-for-libraries#define-the-rule","rel","noreferrer","target","_blank","tuiLink",""],["filename","ng-add.ts",3,"code"],["filename","ng-add.spec.ts",3,"code"],["href","https://github.com/taiga-family/ng-morph","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/classes","tuiLink",""]],template:function(o,c){o&1&&(i(0,"tui-doc-page",0)(1,"p")(2,"strong"),e(3,"@taiga-ui/morph"),t(),e(4," is a large set of tools for both global code base updates in your project and speeding up your work on Angular schematics. It has "),i(5,"a",1),e(6," ts-morph "),t(),e(7," under the hood and allows you to manipulate with safe TypeScript AST. "),t(),i(8,"section")(9,"h3"),e(10,"Why is it better than default schematics?"),t(),i(11,"ul")(12,"li"),e(13,"\u{1F985} You can quickly write migrations for your own project and run it as a simple script"),t(),i(14,"li"),e(15," \u{1F6E0} There are many tools made for working with Angular. You can easily find and manipulate TS and Ng entities. "),t(),i(16,"li"),e(17," \u2705 You work with an abstract tree and it can be replaced, for example, with virtual tree for testing instead of real file system. So, you can test your schematics rapidly fast. "),t()()(),i(18,"h3"),e(19,"How to install"),t(),n(20,"tui-doc-code",2),i(21,"p"),e(22," You also need "),i(23,"code"),e(24,"@angular-devkit/core"),t(),e(25," and "),i(26,"code"),e(27,"@angular-devkit/schematics"),t(),e(28," to be installed. "),t(),i(29,"p"),e(30,"Enjoy!"),t(),i(31,"section")(32,"h3"),e(33,"How to run @taiga-ui/morph"),t(),i(34,"h4"),e(35,"Running in your own project as a script"),t(),i(36,"p"),e(37," You can use @taiga-ui/morph for global updates of your project code base, big refactorings, dependencies migrations and much more. Just describe everything you want in a simple script and run it. "),t(),n(38,"tui-doc-code",3),i(39,"p"),e(40," Now you can compile and run this script or just use something like "),i(41,"a",4),e(42," ts-node "),t(),e(43," that allows you to start TS script as soon as it is ready. "),t(),i(44,"h4"),e(45,"Creating schematics for publishing with libraries"),t(),e(46," You can write schematics scripts to simplify your library installation or make fully automated migrations between releases with breaking changes. "),i(47,"p"),e(48," Creating Angular "),i(49,"code"),e(50,"ng-add"),t(),e(51," or "),i(52,"code"),e(53,"ng-update"),t(),e(54," schematics you work with "),i(55,"a",5),e(56," Rule "),t(),e(57," functions. Rule function gets a "),i(58,"code"),e(59,"Tree"),t(),e(60," as a first argument and you can pass this tree to "),i(61,"code"),e(62,"setActiveProject"),t(),e(63," function from ng-morph the following way: "),t(),n(64,"tui-doc-code",6),t(),i(65,"section")(66,"h3"),e(67,"How to test your schematics"),t(),i(68,"p"),e(69,"You can use any test runner you like to check that your schematics work as you expect."),t(),i(70,"p"),e(71,"Let's try to test the migration above:"),t(),n(72,"tui-doc-code",7),t(),i(73,"section")(74,"h3"),e(75,"What is next?"),t(),i(76,"p"),e(77," So, now you know how to set it up. Give a star to "),i(78,"a",8),e(79," our project on Github "),t(),e(80," and start exploring utils in the left menu to find all the tools you need. We suggest you to start with "),i(81,"a",9),e(82," Classes "),t()()()()),o&2&&(a(38),s("code",c.script),a(26),s("code",c.creatingRule),a(8),s("code",c.creatingSpec))},dependencies:[d,u,h,p],styles:["[_nghost-%COMP%]{max-width:1200px}"],changeDetection:0});var l=r;export{l as default};
