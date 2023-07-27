"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 9237:
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);



class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["ng-morph-root"]],
  decls: 7,
  vars: 0,
  consts: [["ngProjectAs", "tuiDocHeader", 5, ["tuiDocHeader"]], ["href", "https://www.npmjs.com/package/ng-morph", "target", "_blank", 1, "npm-link"], ["alt", "npm-link", "src", "https://img.shields.io/npm/dy/ng-morph?color=gainsboro&style=flat-square"], ["tuiLink", "", "tuiMode", "onLight", "href", "https://github.com/TinkoffCreditSystems/ng-morph", "target", "_blank", 1, "github-link"], ["src", "assets/images/github.svg", "alt", "", 1, "github"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-main");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " GitHub ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocMainComponent, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkComponent],
  styles: ["[_nghost-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n.npm-link[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-left: 12px;\n}\n.github-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 24px;\n}\n.github[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 16px;\n  vertical-align: -6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG5cbi5ucG0tbGluayB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5naXRodWItbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5naXRodWIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgNHB4IDAgMTZweDtcbiAgdmVydGljYWwtYWxpZ246IC02cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 5285:
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HIGHLIGHT_OPTIONS_VALUE": () => (/* binding */ HIGHLIGHT_OPTIONS_VALUE)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 3801);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo/logo.component */ 3005);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 5491);
/* harmony import */ var _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started/getting-started.module */ 2158);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ 4941);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);













const HIGHLIGHT_OPTIONS_VALUE = {
  coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 8622)),
  lineNumbersLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlightjs-line-numbers_js_src_highlightjs-line-numbers_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlightjs-line-numbers.js */ 5523, 23)),
  languages: {
    typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 5281)),
    less: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_less_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/less */ 3837)),
    xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 526))
  }
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_LOGO,
    useValue: _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LOGO_CONTENT
  }, {
    provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TUI_DOC_PAGES,
    useValue: _pages__WEBPACK_IMPORTED_MODULE_2__.pages
  }, {
    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__.HIGHLIGHT_OPTIONS,
    useValue: HIGHLIGHT_OPTIONS_VALUE
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_10__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiLinkModule, _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__.GettingStartedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__.ROUTES, {
    initialNavigation: 'enabledBlocking'
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_10__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_11__.TuiLinkModule, _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__.GettingStartedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 5868:
/*!************************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedComponent": () => (/* binding */ GettingStartedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




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
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) {
  return new (t || GettingStartedComponent)();
};
GettingStartedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GettingStartedComponent,
  selectors: [["getting-started"]],
  decls: 83,
  vars: 3,
  consts: [["header", "Getting started"], ["tuiLink", "", "href", "https://ts-morph.com/"], ["code", "npm i --save-dev ng-morph"], ["filename", "script.ts", 3, "code"], ["tuiLink", "", "href", "https://www.npmjs.com/package/ts-node", "target", "_blank"], ["tuiLink", "", "href", "https://angular.io/guide/schematics-for-libraries#define-the-rule", "target", "_blank"], ["filename", "ng-add.ts", 3, "code"], ["filename", "ng-add.spec.ts", 3, "code"], ["tuiLink", "", "href", "https://github.com/TinkoffCreditSystems/ng-morph", "target", "_blank"], ["tuiLink", "", "routerLink", "/classes"]],
  template: function GettingStartedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p")(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-morph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is a large set of tools for both global code base updates in your project and speeding up your work on Angular schematics. It has ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ts-morph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " under the hood and allows you to manipulate with safe TypeScript AST. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section")(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why is it better than default schematics?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul")(12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \uD83E\uDD85 You can quickly write migrations for your own project and run it as a simple script ");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "ts-node");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rule");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " You can use any test runner you like to check that your schematics work as you expect. ");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "our project on Github");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " and start exploring utils in the left menu to find all the tools you need. We suggest you to start with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Classes");
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


/***/ }),

/***/ 2158:
/*!*********************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedModule": () => (/* binding */ GettingStartedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.component */ 5868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class GettingStartedModule {}
GettingStartedModule.ɵfac = function GettingStartedModule_Factory(t) {
  return new (t || GettingStartedModule)();
};
GettingStartedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GettingStartedModule
});
GettingStartedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GettingStartedModule, {
    declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent]
  });
})();

/***/ }),

/***/ 3005:
/*!**************************************************!*\
  !*** ./apps/demo/src/app/logo/logo.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGO_CONTENT": () => (/* binding */ LOGO_CONTENT),
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 5982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


class LogoComponent {}
LogoComponent.ɵfac = function LogoComponent_Factory(t) {
  return new (t || LogoComponent)();
};
LogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LogoComponent,
  selectors: [["logo"]],
  decls: 3,
  vars: 0,
  consts: [["src", "assets/images/ng-morph.png", "alt", "Logo", 1, "logo"], ["src", "assets/images/by.svg", "alt", "by Tinkoff", 1, "by"]],
  template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nng-morph\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 47.9625em) {\n  [_nghost-%COMP%] {\n    font-size: 0;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.by[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n@media screen and (max-width: 47.9625em) {\n  .by[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztFQUdFO0FBQ0Y7OztDQUdDO0FBUEQ7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVBFO0VBQUE7SUFDRSxZQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBU0Y7QUFOQTtFQUNFLGlCQUFBO0FBUUY7QUFORTtFQUFBO0lBQ0UsYUFBQTtFQVNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+QHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBAdHVpLW1vYmlsZSB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG5cbiAgQG1lZGlhIEB0dWktbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

const LOGO_CONTENT = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__.PolymorpheusComponent(LogoComponent);

/***/ }),

/***/ 5491:
/*!************************************!*\
  !*** ./apps/demo/src/app/pages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages)
/* harmony export */ });
const pages = [{
  section: `Starting`,
  title: `Getting started`,
  keywords: 'intro, how to, guide, main, главная, начало, инструкция',
  route: 'getting-started'
}, {
  section: `File body processing`,
  title: `Classes`,
  keywords: 'classes, file, methods, props, properties, accessors, constructors, decorators',
  route: 'classes'
}, {
  section: `File body processing`,
  title: `Interfaces`,
  keywords: 'interfaces, file, typescript',
  route: 'interfaces'
}, {
  section: `File body processing`,
  title: `Variables`,
  keywords: 'variables, const, let, var, file, typescript',
  route: 'variables'
}, {
  section: `File body processing`,
  title: `Imports and Exports`,
  keywords: 'import, export, file, typescript',
  route: 'imports-and-exports'
}, {
  section: `File body processing`,
  title: `Functions`,
  keywords: 'functions, arguments, return, file, typescript',
  route: 'functions'
}, {
  section: `File body processing`,
  title: `Enums`,
  keywords: 'enums, enumerate, file, typescript',
  route: 'enums'
}, {
  section: `File body processing`,
  title: `Types`,
  keywords: 'types, aliases, file, typescript',
  route: 'types'
}, {
  section: `Angular bootstrap`,
  title: `Get bootstrap function`,
  keywords: 'angular, bootstrap, module, typescript',
  route: 'get-bootstrap-function'
}, {
  section: `Angular bootstrap`,
  title: `Get main module`,
  keywords: 'angular, bootstrap, module, typescript',
  route: 'get-main-module'
}, {
  section: `File system`,
  title: `Source files`,
  keywords: 'files, file, system, tree, typescript',
  route: 'source-files'
}, {
  section: `Examples`,
  title: `@Inject -> inject migration`,
  keywords: 'example, DI, decorators',
  route: 'inject-sample'
}];

/***/ }),

/***/ 4941:
/*!*************************************!*\
  !*** ./apps/demo/src/app/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started/getting-started.component */ 5868);

const ROUTES = [{
  path: 'getting-started',
  component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent,
  data: {
    title: `Getting started`
  }
}, {
  path: 'classes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_classes_classes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/classes/classes.module */ 2203)).then(m => m.ClassesModule),
  data: {
    title: `Classes`
  }
}, {
  path: 'interfaces',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_interfaces_interfaces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/interfaces/interfaces.module */ 8854)).then(m => m.InterfacesModule),
  data: {
    title: `Interfaces`
  }
}, {
  path: 'variables',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_variables_variables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/variables/variables.module */ 6769)).then(m => m.VariablesModule),
  data: {
    title: `Variables`
  }
}, {
  path: 'imports-and-exports',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_imports-and-exports_imports-and-exports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/imports-and-exports/imports-and-exports.module */ 2520)).then(m => m.ImportsAndExportsModule),
  data: {
    title: `Imports and Exports`
  }
}, {
  path: 'enums',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_enums_enums_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/enums/enums.module */ 3342)).then(m => m.EnumsModule),
  data: {
    title: `Enums`
  }
}, {
  path: 'functions',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_functions_functions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/functions/functions.module */ 6794)).then(m => m.FunctionsModule),
  data: {
    title: `Functions`
  }
}, {
  path: 'types',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_types_types_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/types/types.module */ 494)).then(m => m.TypesModule),
  data: {
    title: `Types`
  }
}, {
  path: 'get-main-module',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_get-main-module_get-main-module_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/get-main-module/get-main-module.module */ 1330)).then(m => m.GetMainModuleModule),
  data: {
    title: `Get main module`
  }
}, {
  path: 'get-bootstrap-function',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_get-bootstrap-function_get-bootstrap-function_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/get-bootstrap-function/get-bootstrap-function.module */ 7051)).then(m => m.GetBootstrapFunctionModule),
  data: {
    title: `Get bootstrap function`
  }
}, {
  path: 'source-files',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_source-files_source-files_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/source-files/source-files.module */ 9103)).then(m => m.SourceFilesModule),
  data: {
    title: `Source files`
  }
}, {
  path: 'inject-sample',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_inject-sample_inject-sample_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/inject-sample/inject-sample.module */ 7050)).then(m => m.InjectSampleModule),
  data: {
    title: `@Inject -> inject example`
  }
}, {
  path: '**',
  redirectTo: 'getting-started'
}];

/***/ }),

/***/ 9301:
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 1362:
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5285);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9301);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1362)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map