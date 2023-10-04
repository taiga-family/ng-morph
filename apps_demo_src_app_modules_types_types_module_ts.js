"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_types_types_module_ts"],{

/***/ 2641:
/*!************************************************************!*\
  !*** ./apps/demo/src/app/modules/types/types.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypesComponent": () => (/* binding */ TypesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 6604);


const types = `import {
    addTypeAliases,
    editTypeAliases,
    getTypeAliases,
    removeTypeAliases,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addTypeAliases('some/path/file.ts', {
    name: 'A',
    typeParameters: ['T'],
    type: 'T[]',
});

const declarations = getTypeAliases('some/path/file.ts');

editTypeAliases(declarations, () => ({
    name: 'B',
}));

removeTypeAliases(declarations);

saveActiveProject();
`;
class TypesComponent {
  constructor() {
    this.types = types;
  }
}
TypesComponent.ɵfac = function TypesComponent_Factory(t) {
  return new (t || TypesComponent)();
};
TypesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TypesComponent,
  selectors: [["types"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Types"], ["filename", "migration.ts", 3, "code"]],
  template: function TypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get, edit and remove types in your files with declarative descriptions and conditions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.types);
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});


/***/ }),

/***/ 494:
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/modules/types/types.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypesModule": () => (/* binding */ TypesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9574);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2171);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 4109);
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.component */ 2641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);






class TypesModule {}
TypesModule.ɵfac = function TypesModule_Factory(t) {
  return new (t || TypesModule)();
};
TypesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TypesModule
});
TypesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_types_component__WEBPACK_IMPORTED_MODULE_0__.TypesComponent))]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TypesModule, {
    declarations: [_types_component__WEBPACK_IMPORTED_MODULE_0__.TypesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_types_component__WEBPACK_IMPORTED_MODULE_0__.TypesComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_types_types_module_ts.js.map