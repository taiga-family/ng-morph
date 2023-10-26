"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_get-bootstrap-function_get-bootstrap-function_module_ts"],{

/***/ 6602:
/*!**********************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-bootstrap-function/get-bootstrap-function.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetBootstrapFunctionComponent: () => (/* binding */ GetBootstrapFunctionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);



const bootstrap = `import {
    getBootstrapFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapFn('src/main.ts');
`;
const bootstrapApplication = `import {
    getBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');
`;
const addProviders = `import {
    getBootstrapApplicationFn,
    addProviderToBootstrapApplicationFn,
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const bootstrapFn = getBootstrapApplicationFn('src/main.ts');

addProviderToBootstrapApplicationFn(bootstrapFn, 'provideRouter()');
`;
class GetBootstrapFunctionComponent {
  constructor() {
    this.bootstrap = bootstrap;
    this.bootstrapApplication = bootstrapApplication;
    this.addProviders = addProviders;
  }
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: GetBootstrapFunctionComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: GetBootstrapFunctionComponent,
    selector: "get-bootstrap-function",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"Get bootstrap function\">\n  <section>\n    <h2>Module Application</h2>\n\n    <p>Finds a bootstrap function of Angular application with a path pattern</p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"bootstrap\"></tui-doc-code>\n  </section>\n\n  <section>\n    <h2>Standalone Application</h2>\n\n    <p>Finds a bootstrap application function with a path pattern</p>\n\n    <tui-doc-code\n      filename=\"migration.ts\"\n      [code]=\"bootstrapApplication\"\n    ></tui-doc-code>\n  </section>\n\n  <section>\n    <h2>Add providers to standalone Application</h2>\n\n    <p>\n      To add providers to standalone application you need to use\n      <code>addProviderToBootstrapApplicationFn</code> function\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"addProviders\"></tui-doc-code>\n  </section>\n</tui-doc-page>\n",
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent,
      selector: "tui-doc-code",
      inputs: ["filename", "code"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent,
      selector: "tui-doc-page",
      inputs: ["header", "package", "type", "path", "deprecated"]
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: GetBootstrapFunctionComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'get-bootstrap-function',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Get bootstrap function\">\n  <section>\n    <h2>Module Application</h2>\n\n    <p>Finds a bootstrap function of Angular application with a path pattern</p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"bootstrap\"></tui-doc-code>\n  </section>\n\n  <section>\n    <h2>Standalone Application</h2>\n\n    <p>Finds a bootstrap application function with a path pattern</p>\n\n    <tui-doc-code\n      filename=\"migration.ts\"\n      [code]=\"bootstrapApplication\"\n    ></tui-doc-code>\n  </section>\n\n  <section>\n    <h2>Add providers to standalone Application</h2>\n\n    <p>\n      To add providers to standalone application you need to use\n      <code>addProviderToBootstrapApplicationFn</code> function\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"addProviders\"></tui-doc-code>\n  </section>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

/***/ }),

/***/ 6405:
/*!*******************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-bootstrap-function/get-bootstrap-function.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetBootstrapFunctionModule: () => (/* binding */ GetBootstrapFunctionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-bootstrap-function.component */ 6602);







class GetBootstrapFunctionModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GetBootstrapFunctionModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GetBootstrapFunctionModule,
    declarations: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: GetBootstrapFunctionModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: GetBootstrapFunctionModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent))],
      declarations: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent],
      exports: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_0__.GetBootstrapFunctionComponent]
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_get-bootstrap-function_get-bootstrap-function_module_ts.js.map