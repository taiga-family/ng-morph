"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[69],{

/***/ 522:
/*!************************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GettingStartedComponent: () => (/* binding */ GettingStartedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2454);




const script = `import {
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
`;
const creatingRule = `import {
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
};`;
const creatingSpec = `
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
`;
class GettingStartedComponent {
  constructor() {
    this.script = script;
    this.creatingRule = creatingRule;
    this.creatingSpec = creatingSpec;
  }
  static #_ = this.ɵfac = function GettingStartedComponent_Factory(t) {
    return new (t || GettingStartedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GettingStartedComponent,
    selectors: [["getting-started"]],
    decls: 83,
    vars: 3,
    consts: [["header", "Getting started"], ["href", "https://ts-morph.com/", "tuiLink", ""], ["code", "npm i --save-dev ng-morph"], ["filename", "script.ts", 3, "code"], ["href", "https://www.npmjs.com/package/ts-node", "target", "_blank", "tuiLink", ""], ["href", "https://angular.io/guide/schematics-for-libraries#define-the-rule", "target", "_blank", "tuiLink", ""], ["filename", "ng-add.ts", 3, "code"], ["filename", "ng-add.spec.ts", 3, "code"], ["href", "https://github.com/taiga-family/ng-morph", "target", "_blank", "tuiLink", ""], ["routerLink", "/classes", "tuiLink", ""]],
    template: function GettingStartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p")(2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is a large set of tools for both global code base updates in your project and speeding up your work on Angular schematics. It has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ts-morph ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " under the hood and allows you to manipulate with safe TypeScript AST. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section")(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why is it better than default schematics?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul")(12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uD83E\uDD85 You can quickly write migrations for your own project and run it as a simple script");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \uD83D\uDEE0 There are many tools made for working with Angular. You can easily find and manipulate TS and Ng entities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u2705 You work with an abstract tree and it can be replaced, for example, with virtual tree for testing instead of real file system. So, you can test your schematics rapidly fast. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "How to install");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-doc-code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " You also need ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "@angular-devkit/core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "@angular-devkit/schematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " to be installed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Enjoy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section")(32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "How to run ng-morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Running in your own project as a script");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " You can use ng-morph for global updates of your porject code base, big refactiorings, dependencies migrations and much more. Just describe everything you want in a simple script and run it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "tui-doc-code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Now you can compile and run this script or just use something like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ts-node ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " that allows you to start TS script as soon as it is ready. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Creating schematics for publishing with libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " You can write schematics scripts to simplify your library installation or make fully automated migrations between releases with breaking changes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Creating Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ng-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ng-update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " schematics you work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Rule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " functions. Rule function gets a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " as a first argument and you can pass this tree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "setActiveProject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " function from ng-morph the following way: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "tui-doc-code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section")(66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "How to test your schematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "You can use any test runner you like to check that your schematics work as you expect.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Let's try to test the migration above:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "tui-doc-code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section")(74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "What is next?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " So, now you know how to set it up. Give a star to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " our project on Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " and start exploring utils in the left menu to find all the tools you need. We suggest you to start with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.script);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.creatingRule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.creatingSpec);
      }
    },
    dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["[_nghost-%COMP%] {max-width: 1200px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8saUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge21heC13aWR0aDogMTIwMHB4fSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 7355:
/*!*********************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GettingStartedModule: () => (/* binding */ GettingStartedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.component */ 522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);







class GettingStartedModule {
  static #_ = this.ɵfac = function GettingStartedModule_Factory(t) {
    return new (t || GettingStartedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GettingStartedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.tuiGenerateRoutes)(_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent))]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GettingStartedModule, {
    declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=69.js.map