"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_variables_variables_module_ts"],{

/***/ 171:
/*!********************************************************************!*\
  !*** ./apps/demo/src/app/modules/variables/variables.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesComponent": () => (/* binding */ VariablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);


const code = `import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addVariables('some/path/file.ts', {
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: 'name',
        initializer: "'value'",
      },
    ],
});

const declarations = getVariables('some/path/**.ts');

editVariables(declarations, () => ({
    name: 'B',
}));

removeVariables(declarations);

saveActiveProject();
`;
class VariablesComponent {
  constructor() {
    this.code = code;
  }
}
VariablesComponent.ɵfac = function VariablesComponent_Factory(t) {
  return new (t || VariablesComponent)();
};
VariablesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VariablesComponent,
  selectors: [["variables"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Variables"], ["filename", "migration.ts", 3, "code"]],
  template: function VariablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get, edit and remove variables in your files with declarative descriptions and conditions. ");
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

/***/ 6769:
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/variables/variables.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesModule": () => (/* binding */ VariablesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9574);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2171);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _variables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.component */ 171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class VariablesModule {}
VariablesModule.ɵfac = function VariablesModule_Factory(t) {
  return new (t || VariablesModule)();
};
VariablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VariablesModule
});
VariablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_variables_component__WEBPACK_IMPORTED_MODULE_0__.VariablesComponent))]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VariablesModule, {
    declarations: [_variables_component__WEBPACK_IMPORTED_MODULE_0__.VariablesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_variables_component__WEBPACK_IMPORTED_MODULE_0__.VariablesComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_variables_variables_module_ts.js.map