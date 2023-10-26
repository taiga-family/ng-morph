"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 7718:
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);




class AppComponent {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: AppComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: AppComponent,
    selector: "ng-morph-root",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-main>\n  <ng-container ngProjectAs=\"tuiDocHeader\">\n    <a\n      class=\"npm-link\"\n      href=\"https://www.npmjs.com/package/ng-morph\"\n      target=\"_blank\"\n    >\n      <img\n        alt=\"npm-link\"\n        src=\"https://img.shields.io/npm/dy/ng-morph?color=gainsboro&style=flat-square\"\n      />\n    </a>\n\n    <a\n      tuiLink\n      tuiMode=\"onLight\"\n      class=\"github-link\"\n      href=\"https://github.com/taiga-family/ng-morph\"\n      target=\"_blank\"\n    >\n      <img class=\"github\" src=\"assets/images/github.svg\" alt=\"\" />\n      GitHub\n    </a>\n  </ng-container>\n</tui-doc-main>\n",
    styles: [":host {\n  font: var(--tui-font-text-m);\n}\n.npm-link {\n  margin-top: 8px;\n  margin-left: 12px;\n}\n.github-link {\n  font-weight: bold;\n  height: 24px;\n}\n.github {\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 16px;\n  vertical-align: -6px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG5cbi5ucG0tbGluayB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5naXRodWItbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5naXRodWIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgNHB4IDAgMTZweDtcbiAgdmVydGljYWwtYWxpZ246IC02cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocMainComponent,
      selector: "tui-doc-main"
    }, {
      kind: "component",
      type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkComponent,
      selector: "a[tuiLink], button[tuiLink]",
      inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"],
      exportAs: ["tuiLink"]
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: AppComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-morph-root',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-main>\n  <ng-container ngProjectAs=\"tuiDocHeader\">\n    <a\n      class=\"npm-link\"\n      href=\"https://www.npmjs.com/package/ng-morph\"\n      target=\"_blank\"\n    >\n      <img\n        alt=\"npm-link\"\n        src=\"https://img.shields.io/npm/dy/ng-morph?color=gainsboro&style=flat-square\"\n      />\n    </a>\n\n    <a\n      tuiLink\n      tuiMode=\"onLight\"\n      class=\"github-link\"\n      href=\"https://github.com/taiga-family/ng-morph\"\n      target=\"_blank\"\n    >\n      <img class=\"github\" src=\"assets/images/github.svg\" alt=\"\" />\n      GitHub\n    </a>\n  </ng-container>\n</tui-doc-main>\n",
      styles: [":host {\n  font: var(--tui-font-text-m);\n}\n.npm-link {\n  margin-top: 8px;\n  margin-left: 12px;\n}\n.github-link {\n  font-weight: bold;\n  height: 24px;\n}\n.github {\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 16px;\n  vertical-align: -6px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG5cbi5ucG0tbGluayB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5naXRodWItbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5naXRodWIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgNHB4IDAgMTZweDtcbiAgdmVydGljYWwtYWxpZ246IC02cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    }]
  }]
});

/***/ }),

/***/ 6795:
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HIGHLIGHT_OPTIONS_VALUE: () => (/* binding */ HIGHLIGHT_OPTIONS_VALUE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 3380);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3316);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9933);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 7718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo/logo.component */ 4965);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 7103);
/* harmony import */ var _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started/getting-started.module */ 7355);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ 5527);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ 8274);














const HIGHLIGHT_OPTIONS_VALUE = {
  coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 9280)),
  lineNumbersLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlightjs-line-numbers_js_src_highlightjs-line-numbers_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlightjs-line-numbers.js */ 7166, 23)),
  languages: {
    typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 1903)),
    less: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_less_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/less */ 453)),
    xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 8833))
  }
};
class AppModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
    type: AppModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_8__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiLinkModule, _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__.GettingStartedModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
    type: AppModule,
    providers: [{
      provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TUI_DOC_LOGO,
      useValue: _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LOGO_CONTENT
    }, {
      provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TUI_DOC_PAGES,
      useValue: _pages__WEBPACK_IMPORTED_MODULE_2__.pages
    }, {
      provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__.HIGHLIGHT_OPTIONS,
      useValue: HIGHLIGHT_OPTIONS_VALUE
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_8__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiLinkModule, _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__.GettingStartedModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__.ROUTES, {
      initialNavigation: 'enabledBlocking'
    })]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
  type: AppModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_8__.TuiDocMainModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_9__.TuiLinkModule, _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_3__.GettingStartedModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__.ROUTES, {
        initialNavigation: 'enabledBlocking'
      })],
      providers: [{
        provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TUI_DOC_LOGO,
        useValue: _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LOGO_CONTENT
      }, {
        provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_11__.TUI_DOC_PAGES,
        useValue: _pages__WEBPACK_IMPORTED_MODULE_2__.pages
      }, {
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__.HIGHLIGHT_OPTIONS,
        useValue: HIGHLIGHT_OPTIONS_VALUE
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    }]
  }]
});

/***/ }),

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
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: GettingStartedComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: GettingStartedComponent,
    selector: "getting-started",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"Getting started\">\n  <p>\n    <strong>ng-morph</strong> is a large set of tools for both global code base\n    updates in your project and speeding up your work on Angular schematics. It\n    has <a tuiLink href=\"https://ts-morph.com/\">ts-morph</a> under the hood and\n    allows you to manipulate with safe TypeScript AST.\n  </p>\n\n  <section>\n    <h3>Why is it better than default schematics?</h3>\n\n    <ul>\n      <li>\n        \uD83E\uDD85 You can quickly write migrations for your own project and run it as a\n        simple script\n      </li>\n\n      <li>\n        \uD83D\uDEE0 There are many tools made for working with Angular. You can easily\n        find and manipulate TS and Ng entities.\n      </li>\n\n      <li>\n        \u2705 You work with an abstract tree and it can be replaced, for example,\n        with virtual tree for testing instead of real file system. So, you can\n        test your schematics rapidly fast.\n      </li>\n    </ul>\n  </section>\n\n  <h3>How to install</h3>\n\n  <tui-doc-code code=\"npm i --save-dev ng-morph\"></tui-doc-code>\n\n  <p>\n    You also need <code>@angular-devkit/core</code> and\n    <code>@angular-devkit/schematics</code> to be installed.\n  </p>\n\n  <p>Enjoy!</p>\n\n  <section>\n    <h3>How to run ng-morph</h3>\n\n    <h4>Running in your own project as a script</h4>\n\n    <p>\n      You can use ng-morph for global updates of your porject code base, big\n      refactiorings, dependencies migrations and much more. Just describe\n      everything you want in a simple script and run it.\n    </p>\n\n    <tui-doc-code filename=\"script.ts\" [code]=\"script\"></tui-doc-code>\n\n    <p>\n      Now you can compile and run this script or just use something like\n      <a tuiLink href=\"https://www.npmjs.com/package/ts-node\" target=\"_blank\"\n        >ts-node</a\n      >\n      that allows you to start TS script as soon as it is ready.\n    </p>\n\n    <h4>Creating schematics for publishing with libraries</h4>\n\n    You can write schematics scripts to simplify your library installation or\n    make fully automated migrations between releases with breaking changes.\n\n    <p>\n      Creating Angular <code>ng-add</code> or <code>ng-update</code> schematics\n      you work with\n      <a\n        tuiLink\n        href=\"https://angular.io/guide/schematics-for-libraries#define-the-rule\"\n        target=\"_blank\"\n        >Rule</a\n      >\n      functions. Rule function gets a <code>Tree</code> as a first argument and\n      you can pass this tree to <code>setActiveProject</code> function from\n      ng-morph the following way:\n    </p>\n\n    <tui-doc-code filename=\"ng-add.ts\" [code]=\"creatingRule\"></tui-doc-code>\n  </section>\n\n  <section>\n    <h3>How to test your schematics</h3>\n\n    <p>\n      You can use any test runner you like to check that your schematics work as\n      you expect.\n    </p>\n\n    <p>Let's try to test the migration above:</p>\n\n    <tui-doc-code\n      filename=\"ng-add.spec.ts\"\n      [code]=\"creatingSpec\"\n    ></tui-doc-code>\n  </section>\n\n  <section>\n    <h3>What is next?</h3>\n\n    <p>\n      So, now you know how to set it up. Give a star to\n      <a tuiLink href=\"https://github.com/taiga-family/ng-morph\" target=\"_blank\"\n        >our project on Github</a\n      >\n      and start exploring utils in the left menu to find all the tools you need.\n      We suggest you to start with\n      <a tuiLink routerLink=\"/classes\">Classes</a>\n    </p>\n  </section>\n</tui-doc-page>\n",
    styles: [":host {max-width: 1200px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8saUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge21heC13aWR0aDogMTIwMHB4fSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent,
      selector: "tui-doc-page",
      inputs: ["header", "package", "type", "path", "deprecated"]
    }, {
      kind: "component",
      type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkComponent,
      selector: "a[tuiLink], button[tuiLink]",
      inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"],
      exportAs: ["tuiLink"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent,
      selector: "tui-doc-code",
      inputs: ["filename", "code"]
    }, {
      kind: "directive",
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink,
      selector: "[routerLink]",
      inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"]
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: GettingStartedComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'getting-started',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Getting started\">\n  <p>\n    <strong>ng-morph</strong> is a large set of tools for both global code base\n    updates in your project and speeding up your work on Angular schematics. It\n    has <a tuiLink href=\"https://ts-morph.com/\">ts-morph</a> under the hood and\n    allows you to manipulate with safe TypeScript AST.\n  </p>\n\n  <section>\n    <h3>Why is it better than default schematics?</h3>\n\n    <ul>\n      <li>\n        \uD83E\uDD85 You can quickly write migrations for your own project and run it as a\n        simple script\n      </li>\n\n      <li>\n        \uD83D\uDEE0 There are many tools made for working with Angular. You can easily\n        find and manipulate TS and Ng entities.\n      </li>\n\n      <li>\n        \u2705 You work with an abstract tree and it can be replaced, for example,\n        with virtual tree for testing instead of real file system. So, you can\n        test your schematics rapidly fast.\n      </li>\n    </ul>\n  </section>\n\n  <h3>How to install</h3>\n\n  <tui-doc-code code=\"npm i --save-dev ng-morph\"></tui-doc-code>\n\n  <p>\n    You also need <code>@angular-devkit/core</code> and\n    <code>@angular-devkit/schematics</code> to be installed.\n  </p>\n\n  <p>Enjoy!</p>\n\n  <section>\n    <h3>How to run ng-morph</h3>\n\n    <h4>Running in your own project as a script</h4>\n\n    <p>\n      You can use ng-morph for global updates of your porject code base, big\n      refactiorings, dependencies migrations and much more. Just describe\n      everything you want in a simple script and run it.\n    </p>\n\n    <tui-doc-code filename=\"script.ts\" [code]=\"script\"></tui-doc-code>\n\n    <p>\n      Now you can compile and run this script or just use something like\n      <a tuiLink href=\"https://www.npmjs.com/package/ts-node\" target=\"_blank\"\n        >ts-node</a\n      >\n      that allows you to start TS script as soon as it is ready.\n    </p>\n\n    <h4>Creating schematics for publishing with libraries</h4>\n\n    You can write schematics scripts to simplify your library installation or\n    make fully automated migrations between releases with breaking changes.\n\n    <p>\n      Creating Angular <code>ng-add</code> or <code>ng-update</code> schematics\n      you work with\n      <a\n        tuiLink\n        href=\"https://angular.io/guide/schematics-for-libraries#define-the-rule\"\n        target=\"_blank\"\n        >Rule</a\n      >\n      functions. Rule function gets a <code>Tree</code> as a first argument and\n      you can pass this tree to <code>setActiveProject</code> function from\n      ng-morph the following way:\n    </p>\n\n    <tui-doc-code filename=\"ng-add.ts\" [code]=\"creatingRule\"></tui-doc-code>\n  </section>\n\n  <section>\n    <h3>How to test your schematics</h3>\n\n    <p>\n      You can use any test runner you like to check that your schematics work as\n      you expect.\n    </p>\n\n    <p>Let's try to test the migration above:</p>\n\n    <tui-doc-code\n      filename=\"ng-add.spec.ts\"\n      [code]=\"creatingSpec\"\n    ></tui-doc-code>\n  </section>\n\n  <section>\n    <h3>What is next?</h3>\n\n    <p>\n      So, now you know how to set it up. Give a star to\n      <a tuiLink href=\"https://github.com/taiga-family/ng-morph\" target=\"_blank\"\n        >our project on Github</a\n      >\n      and start exploring utils in the left menu to find all the tools you need.\n      We suggest you to start with\n      <a tuiLink routerLink=\"/classes\">Classes</a>\n    </p>\n  </section>\n</tui-doc-page>\n",
      styles: [":host {max-width: 1200px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8saUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge21heC13aWR0aDogMTIwMHB4fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    }]
  }]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.component */ 522);







class GettingStartedModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GettingStartedModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GettingStartedModule,
    declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GettingStartedModule,
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: GettingStartedModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocPageModule, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiDocCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
      declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent],
      exports: [_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent]
    }]
  }]
});

/***/ }),

/***/ 4965:
/*!**************************************************!*\
  !*** ./apps/demo/src/app/logo/logo.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOGO_CONTENT: () => (/* binding */ LOGO_CONTENT),
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ 6338);



class LogoComponent {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: LogoComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: LogoComponent,
    selector: "logo",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<img src=\"assets/images/ng-morph.png\" class=\"logo\" alt=\"Logo\" />\nng-morph\n<img src=\"assets/images/by.svg\" class=\"by\" alt=\"by Tinkoff\" />\n",
    styles: ["/**\n * @deprecated remove in 4.0\n */\n/**\n * @description:\n * disable smooth scrolling when users have prefers-reduced-motion enabled\n */\n/*\nEvery max-width of breakpoint is equal:\nnext min-width - 60% from 1px (1/16 * 0.6 = 0.0375)\n*/\n:host {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 47.9625em) {\n  :host {\n    font-size: 0;\n  }\n}\n.logo {\n  width: 30px;\n  margin-right: 10px;\n}\n.by {\n  margin-left: 14px;\n}\n@media screen and (max-width: 47.9625em) {\n  .by {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7OztFQUdFO0FBQ0Y7OztDQUdDO0FBUkQ7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFVRjtBQVJFO0VBQUE7SUFDRSxZQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBVUY7QUFQQTtFQUNFLGlCQUFBO0FBU0Y7QUFQRTtFQUFBO0lBQ0UsYUFBQTtFQVVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+QHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBAdHVpLW1vYmlsZSB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG5cbiAgQG1lZGlhIEB0dWktbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: LogoComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'logo',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<img src=\"assets/images/ng-morph.png\" class=\"logo\" alt=\"Logo\" />\nng-morph\n<img src=\"assets/images/by.svg\" class=\"by\" alt=\"by Tinkoff\" />\n",
      styles: ["/**\n * @deprecated remove in 4.0\n */\n/**\n * @description:\n * disable smooth scrolling when users have prefers-reduced-motion enabled\n */\n/*\nEvery max-width of breakpoint is equal:\nnext min-width - 60% from 1px (1/16 * 0.6 = 0.0375)\n*/\n:host {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 47.9625em) {\n  :host {\n    font-size: 0;\n  }\n}\n.logo {\n  width: 30px;\n  margin-right: 10px;\n}\n.by {\n  margin-left: 14px;\n}\n@media screen and (max-width: 47.9625em) {\n  .by {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2xvZ28vbG9nby5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7OztFQUdFO0FBQ0Y7OztDQUdDO0FBUkQ7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFVRjtBQVJFO0VBQUE7SUFDRSxZQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBVUY7QUFQQTtFQUNFLGlCQUFBO0FBU0Y7QUFQRTtFQUFBO0lBQ0UsYUFBQTtFQVVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+QHRhaWdhLXVpL2NvcmUvc3R5bGVzL3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBAdHVpLW1vYmlsZSB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG5cbiAgQG1lZGlhIEB0dWktbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    }]
  }]
});
const LOGO_CONTENT = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_1__.PolymorpheusComponent(LogoComponent);

/***/ }),

/***/ 7103:
/*!************************************!*\
  !*** ./apps/demo/src/app/pages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pages: () => (/* binding */ pages)
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

/***/ 5527:
/*!*************************************!*\
  !*** ./apps/demo/src/app/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started/getting-started.component */ 522);

const ROUTES = [{
  path: 'getting-started',
  component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__.GettingStartedComponent,
  data: {
    title: `Getting started`
  }
}, {
  path: 'classes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_classes_classes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/classes/classes.module */ 8484)).then(m => m.ClassesModule),
  data: {
    title: `Classes`
  }
}, {
  path: 'interfaces',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_interfaces_interfaces_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/interfaces/interfaces.module */ 6871)).then(m => m.InterfacesModule),
  data: {
    title: `Interfaces`
  }
}, {
  path: 'variables',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_variables_variables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/variables/variables.module */ 828)).then(m => m.VariablesModule),
  data: {
    title: `Variables`
  }
}, {
  path: 'imports-and-exports',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_imports-and-exports_imports-and-exports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/imports-and-exports/imports-and-exports.module */ 7278)).then(m => m.ImportsAndExportsModule),
  data: {
    title: `Imports and Exports`
  }
}, {
  path: 'enums',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_enums_enums_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/enums/enums.module */ 6944)).then(m => m.EnumsModule),
  data: {
    title: `Enums`
  }
}, {
  path: 'functions',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_functions_functions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/functions/functions.module */ 1873)).then(m => m.FunctionsModule),
  data: {
    title: `Functions`
  }
}, {
  path: 'types',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_types_types_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/types/types.module */ 8180)).then(m => m.TypesModule),
  data: {
    title: `Types`
  }
}, {
  path: 'get-main-module',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_get-main-module_get-main-module_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/get-main-module/get-main-module.module */ 6397)).then(m => m.GetMainModuleModule),
  data: {
    title: `Get main module`
  }
}, {
  path: 'get-bootstrap-function',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_get-bootstrap-function_get-bootstrap-function_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/get-bootstrap-function/get-bootstrap-function.module */ 6405)).then(m => m.GetBootstrapFunctionModule),
  data: {
    title: `Get bootstrap function`
  }
}, {
  path: 'source-files',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_source-files_source-files_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/source-files/source-files.module */ 9873)).then(m => m.SourceFilesModule),
  data: {
    title: `Source files`
  }
}, {
  path: 'inject-sample',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_demo_src_app_modules_inject-sample_inject-sample_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/inject-sample/inject-sample.module */ 7482)).then(m => m.InjectSampleModule),
  data: {
    title: `@Inject -> inject example`
  }
}, {
  path: '**',
  redirectTo: 'getting-started'
}];

/***/ }),

/***/ 3522:
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false
};

/***/ }),

/***/ 5306:
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6795);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3522);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5306)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map