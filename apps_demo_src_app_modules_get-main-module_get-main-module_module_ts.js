"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_get-main-module_get-main-module_module_ts"],{

/***/ 4008:
/*!********************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-main-module/get-main-module.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetMainModuleComponent": () => (/* binding */ GetMainModuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);


const code = `import {
    getMainModule
    setActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classDeclaration = getMainModule('src/main.ts');
`;
class GetMainModuleComponent {
  constructor() {
    this.code = code;
  }
}
GetMainModuleComponent.ɵfac = function GetMainModuleComponent_Factory(t) {
  return new (t || GetMainModuleComponent)();
};
GetMainModuleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GetMainModuleComponent,
  selectors: [["get-main-module"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Get main module"], ["filename", "migration.ts", 3, "code"]],
  template: function GetMainModuleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finds a main module of Angular application in path pattern");
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

/***/ 1330:
/*!*****************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-main-module/get-main-module.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetMainModuleModule": () => (/* binding */ GetMainModuleModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9574);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2171);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _get_main_module_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-main-module.component */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class GetMainModuleModule {}
GetMainModuleModule.ɵfac = function GetMainModuleModule_Factory(t) {
  return new (t || GetMainModuleModule)();
};
GetMainModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: GetMainModuleModule
});
GetMainModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_get_main_module_component__WEBPACK_IMPORTED_MODULE_0__.GetMainModuleComponent))]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GetMainModuleModule, {
    declarations: [_get_main_module_component__WEBPACK_IMPORTED_MODULE_0__.GetMainModuleComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_get_main_module_component__WEBPACK_IMPORTED_MODULE_0__.GetMainModuleComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_get-main-module_get-main-module_module_ts.js.map