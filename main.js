(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fz5":
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./apps/demo/src/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-morph/ng-morph/apps/demo/src/main.ts */"Hasg");


/***/ }),

/***/ "DCkP":
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/*! exports provided: HIGHLIGHT_OPTIONS_VALUE, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_OPTIONS_VALUE", function() { return HIGHLIGHT_OPTIONS_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "mcRc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "eWlv");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages */ "QTdD");
/* harmony import */ var _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getting-started/getting-started.module */ "pXfE");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ "P7vO");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const HIGHLIGHT_OPTIONS_VALUE = {
    coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
    lineNumbersLoader: () => __webpack_require__.e(/*! import() | highlightjs-line-numbers-js */ "highlightjs-line-numbers-js").then(__webpack_require__.t.bind(null, /*! highlightjs-line-numbers.js */ "gPJM", 7)),
    languages: {
        typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
        less: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-less */ "highlight-js-lib-languages-less").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/less */ "GEZ5", 7)),
        xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
    },
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TUI_DOC_LOGO"],
            useValue: _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LOGO_CONTENT"],
        },
        {
            provide: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TUI_DOC_PAGES"],
            useValue: _pages__WEBPACK_IMPORTED_MODULE_7__["pages"],
        },
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_OPTIONS"],
            useValue: HIGHLIGHT_OPTIONS_VALUE,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocMainModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_8__["GettingStartedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], { initialNavigation: 'enabled' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocMainModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _getting_started_getting_started_module__WEBPACK_IMPORTED_MODULE_8__["GettingStartedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "Hasg":
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "DCkP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "+fz5");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "P7vO":
/*!*************************************!*\
  !*** ./apps/demo/src/app/routes.ts ***!
  \*************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "xeSg");

const ROUTES = [
    {
        path: 'getting-started',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_0__["GettingStartedComponent"],
        data: {
            title: `Getting started`,
        },
    },
    {
        path: 'classes',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-classes-classes-module */ "modules-classes-classes-module").then(__webpack_require__.bind(null, /*! ./modules/classes/classes.module */ "V7Qe")).then((m) => m.ClassesModule),
        data: {
            title: `Classes`,
        },
    },
    {
        path: 'interfaces',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-interfaces-interfaces-module */ "modules-interfaces-interfaces-module").then(__webpack_require__.bind(null, /*! ./modules/interfaces/interfaces.module */ "vU32")).then((m) => m.InterfacesModule),
        data: {
            title: `Interfaces`,
        },
    },
    {
        path: 'variables',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-variables-variables-module */ "modules-variables-variables-module").then(__webpack_require__.bind(null, /*! ./modules/variables/variables.module */ "Q9Q6")).then((m) => m.VariablesModule),
        data: {
            title: `Variables`,
        },
    },
    {
        path: 'imports-and-exports',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-imports-and-exports-imports-and-exports-module */ "modules-imports-and-exports-imports-and-exports-module").then(__webpack_require__.bind(null, /*! ./modules/imports-and-exports/imports-and-exports.module */ "JJIa")).then((m) => m.ImportsAndExportsModule),
        data: {
            title: `Imports and Exports`,
        },
    },
    {
        path: 'enums',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-enums-enums-module */ "modules-enums-enums-module").then(__webpack_require__.bind(null, /*! ./modules/enums/enums.module */ "0L+a")).then((m) => m.EnumsModule),
        data: {
            title: `Enums`,
        },
    },
    {
        path: 'functions',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-functions-functions-module */ "modules-functions-functions-module").then(__webpack_require__.bind(null, /*! ./modules/functions/functions.module */ "fxFr")).then((m) => m.FunctionsModule),
        data: {
            title: `Functions`,
        },
    },
    {
        path: 'types',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-types-types-module */ "modules-types-types-module").then(__webpack_require__.bind(null, /*! ./modules/types/types.module */ "7S2Q")).then((m) => m.TypesModule),
        data: {
            title: `Types`,
        },
    },
    {
        path: 'get-main-module',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-get-main-module-get-main-module-module */ "modules-get-main-module-get-main-module-module").then(__webpack_require__.bind(null, /*! ./modules/get-main-module/get-main-module.module */ "PZ1c")).then((m) => m.GetMainModuleModule),
        data: {
            title: `Get main module`,
        },
    },
    {
        path: 'get-bootstrap-function',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-get-bootstrap-function-get-bootstrap-function-module */ "modules-get-bootstrap-function-get-bootstrap-function-module").then(__webpack_require__.bind(null, /*! ./modules/get-bootstrap-function/get-bootstrap-function.module */ "RqsS")).then((m) => m.GetBootstrapFunctionModule),
        data: {
            title: `Get bootstrap function`,
        },
    },
    {
        path: 'source-files',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-source-files-source-files-module */ "modules-source-files-source-files-module").then(__webpack_require__.bind(null, /*! ./modules/source-files/source-files.module */ "wL9k")).then((m) => m.SourceFilesModule),
        data: {
            title: `Source files`,
        },
    },
    { path: '**', redirectTo: 'getting-started' },
];


/***/ }),

/***/ "QTdD":
/*!************************************!*\
  !*** ./apps/demo/src/app/pages.ts ***!
  \************************************/
/*! exports provided: pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
const pages = [
    {
        section: `Starting`,
        title: `Getting started`,
        keywords: 'intro, how to, guide, main, главная, начало, инструкция',
        route: 'getting-started',
    },
    {
        section: `File body processing`,
        title: `Classes`,
        keywords: 'classes, file, methods, props, properties, accessors, constructors, decorators',
        route: 'classes',
    },
    {
        section: `File body processing`,
        title: `Interfaces`,
        keywords: 'interfaces, file, typescript',
        route: 'interfaces',
    },
    {
        section: `File body processing`,
        title: `Variables`,
        keywords: 'variables, const, let, var, file, typescript',
        route: 'variables',
    },
    {
        section: `File body processing`,
        title: `Imports and Exports`,
        keywords: 'import, export, file, typescript',
        route: 'imports-and-exports',
    },
    {
        section: `File body processing`,
        title: `Functions`,
        keywords: 'functions, arguments, return, file, typescript',
        route: 'functions',
    },
    {
        section: `File body processing`,
        title: `Enums`,
        keywords: 'enums, enumerate, file, typescript',
        route: 'enums',
    },
    {
        section: `File body processing`,
        title: `Types`,
        keywords: 'types, aliases, file, typescript',
        route: 'types',
    },
    {
        section: `Angular bootstrap`,
        title: `Get bootstrap function`,
        keywords: 'angular, bootstrap, module, typescript',
        route: 'get-bootstrap-function',
    },
    {
        section: `Angular bootstrap`,
        title: `Get main module`,
        keywords: 'angular, bootstrap, module, typescript',
        route: 'get-main-module',
    },
    {
        section: `File system`,
        title: `Source files`,
        keywords: 'files, file, system, tree, typescript',
        route: 'source-files',
    },
];


/***/ }),

/***/ "eWlv":
/*!**************************************************!*\
  !*** ./apps/demo/src/app/logo/logo.component.ts ***!
  \**************************************************/
/*! exports provided: LogoComponent, LOGO_CONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_CONTENT", function() { return LOGO_CONTENT; });
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "6AEW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["logo"]], decls: 3, vars: 0, consts: [["src", "assets/images/ng-morph.png", "alt", "Logo", 1, "logo"], ["src", "assets/images/by.svg", "alt", "by Tinkoff", 1, "by"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\nng-morph\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 599px) {\n  [_nghost-%COMP%] {\n    font-size: 0;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.by[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n@media screen and (max-width: 599px) {\n  .by[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUFBO0lBQ0UsWUFBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUFGO0FBRUU7RUFBQTtJQUNFLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImxvZ28uc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35AdGFpZ2EtdWkvY29yZS9zdHlsZXMvdGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIEBtb2JpbGUge1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ieSB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuXG4gIEBtZWRpYSBAbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });
const LOGO_CONTENT = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_0__["PolymorpheusComponent"](LogoComponent);


/***/ }),

/***/ "mcRc":
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ng-morph-root"]], decls: 5, vars: 0, consts: [["ngProjectAs", "tuiDocHeader", 5, ["tuiDocHeader"]], ["tuiLink", "", "tuiMode", "onLight", "href", "https://github.com/TinkoffCreditSystems/ng-morph", "target", "_blank", 1, "link"], ["src", "assets/images/github.svg", "alt", "", 1, "github"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocMainComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkComponent"]], styles: ["[_nghost-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n.link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 24px;\n}\n.github[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin: 0 4px 0 16px;\n  vertical-align: -6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG59XG5cbi5saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmdpdGh1YiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCA0cHggMCAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTZweDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "pXfE":
/*!*********************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.module.ts ***!
  \*********************************************************************/
/*! exports provided: GettingStartedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedModule", function() { return GettingStartedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started.component */ "xeSg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GettingStartedModule {
}
GettingStartedModule.ɵfac = function GettingStartedModule_Factory(t) { return new (t || GettingStartedModule)(); };
GettingStartedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GettingStartedModule });
GettingStartedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocCodeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GettingStartedModule, { declarations: [_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiDocCodeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]] }); })();


/***/ }),

/***/ "xeSg":
/*!************************************************************************!*\
  !*** ./apps/demo/src/app/getting-started/getting-started.component.ts ***!
  \************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




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
        this.creatingRule = creatingRule;
        this.creatingSpec = creatingSpec;
    }
}
GettingStartedComponent.ɵfac = function GettingStartedComponent_Factory(t) { return new (t || GettingStartedComponent)(); };
GettingStartedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GettingStartedComponent, selectors: [["getting-started"]], decls: 65, vars: 2, consts: [["header", "Getting started"], ["tuiLink", "", "href", "https://ts-morph.com/"], ["code", "npm i --save-dev ng-morph"], ["tuiLink", "", "href", "https://angular.io/guide/schematics-for-libraries#define-the-rule", "target", "_blank"], ["filename", "ng-add.ts", 3, "code"], ["filename", "ng-add.spec.ts", 3, "code"], ["tuiLink", "", "routerLink", "/classes"]], template: function GettingStartedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ng-morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is a large set of tools that speeds up your work with Angular schematics. It has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ts-morph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " under the hood and allows you to manipulate with safe TypeScript AST. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why is it better than default schematics?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \uD83D\uDEE0 There are many tools made for working with Angular. You can easily find and manipulate TS and Ng entities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u2705 You work with an abstract tree and it can be replaced, for example, with virtual tree for testing instead of real file system. So, you can test your schematics rapidly fast. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "How to install");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-doc-code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " You also need ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@angular-devkit/core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "@angular-devkit/schematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " to be installed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enjoy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "How to use these all things");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Creating Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ng-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ng-update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " schematics you work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " functions. Rule function gets a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " as a first argument and you can pass this tree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "setActiveProject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " function from ng-morph the following way: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "tui-doc-code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "How to test your schematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " You can use any test runner you like to check that your schematics work as you expect. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Let's try to test the migration above:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "tui-doc-code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "What is next?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " So, now you know how to set it up. Explore utils in the left menu and find tools that you need. We suggest you to start with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.creatingRule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.creatingSpec);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {max-width: 1200px}"], changeDetection: 0 });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map