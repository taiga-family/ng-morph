"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_source-files_source-files_module_ts"],{

/***/ 8447:
/*!**************************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceFilesComponent: () => (/* binding */ SourceFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);



const code = `import {
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

createSourceFile('some/path/file.ts', 'const a = "hello";');

const sourceFiles = getSourceFiles('some/**/*.ts');

// It gets a function that process every file
moveSourceFilePaths(sourceFiles, dasherize);

saveActiveProject();
`;
class SourceFilesComponent {
  constructor() {
    this.code = code;
  }
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: SourceFilesComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: SourceFilesComponent,
    selector: "source-files",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"Source files\">\n  <p>\n    You can create, get and move sources files of the project and their paths.\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"code\"></tui-doc-code>\n</tui-doc-page>\n",
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
  type: SourceFilesComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'source-files',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Source files\">\n  <p>\n    You can create, get and move sources files of the project and their paths.\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"code\"></tui-doc-code>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

/***/ }),

/***/ 9873:
/*!***********************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceFilesModule: () => (/* binding */ SourceFilesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _source_files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source-files.component */ 8447);







class SourceFilesModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: SourceFilesModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: SourceFilesModule,
    declarations: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: SourceFilesModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: SourceFilesModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent))],
      declarations: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent],
      exports: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent]
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_source-files_source-files_module_ts.js.map