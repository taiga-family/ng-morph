"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_source-files_source-files_module_ts"],{

/***/ 9682:
/*!**************************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceFilesComponent": () => (/* binding */ SourceFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);


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
}
SourceFilesComponent.ɵfac = function SourceFilesComponent_Factory(t) {
  return new (t || SourceFilesComponent)();
};
SourceFilesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SourceFilesComponent,
  selectors: [["source-files"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Source files"], ["filename", "migration.ts", 3, "code"]],
  template: function SourceFilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get and move sources files of the project and their paths. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 9103:
/*!***********************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceFilesModule": () => (/* binding */ SourceFilesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9574);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2171);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _source_files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source-files.component */ 9682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class SourceFilesModule {}
SourceFilesModule.ɵfac = function SourceFilesModule_Factory(t) {
  return new (t || SourceFilesModule)();
};
SourceFilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SourceFilesModule
});
SourceFilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent))]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SourceFilesModule, {
    declarations: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_source_files_component__WEBPACK_IMPORTED_MODULE_0__.SourceFilesComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_source-files_source-files_module_ts.js.map