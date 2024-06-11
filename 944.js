"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[944],{

/***/ 2934:
/*!************************************************************!*\
  !*** ./apps/demo/src/app/modules/enums/enums.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnumsComponent: () => (/* binding */ EnumsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
var _EnumsComponent;


const code = `import {
    addEnums,
    editEnums,
    getEnums,
    removeEnums,
    setActiveProject,
    saveActiveProject,
} from '@taiga-ui/morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addEnums('some/path/file.ts', [
    {
      name: 'Enum',
      isConst: true,
      members: [{ name: 'First' }, { name: 'second' }],
    },
    {
      name: 'EmptyEnum',
      isExported: true,
    },
]);

const declarations = getEnums('some/path/**.ts');

editEnums(declarations, () => ({
    name: 'B',
}));

removeEnums(declarations);

saveActiveProject();
`;
class EnumsComponent {
  constructor() {
    this.code = code;
  }
}
_EnumsComponent = EnumsComponent;
_EnumsComponent.ɵfac = function EnumsComponent_Factory(t) {
  return new (t || _EnumsComponent)();
};
_EnumsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _EnumsComponent,
  selectors: [["enums"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Enums"], ["filename", "migration.ts", 3, "code"]],
  template: function EnumsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can create, get, edit and remove enums in your files with declarative descriptions and conditions.");
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
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnVtcy5zdHlsZS5sZXNzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL21vZHVsZXMvZW51bXMvZW51bXMuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEpBQTRKIiwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});


/***/ }),

/***/ 6944:
/*!*********************************************************!*\
  !*** ./apps/demo/src/app/modules/enums/enums.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnumsModule: () => (/* binding */ EnumsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _enums_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.component */ 2934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
var _EnumsModule;






class EnumsModule {}
_EnumsModule = EnumsModule;
_EnumsModule.ɵfac = function EnumsModule_Factory(t) {
  return new (t || _EnumsModule)();
};
_EnumsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _EnumsModule
});
_EnumsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_enums_component__WEBPACK_IMPORTED_MODULE_0__.EnumsComponent))]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EnumsModule, {
    declarations: [_enums_component__WEBPACK_IMPORTED_MODULE_0__.EnumsComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_enums_component__WEBPACK_IMPORTED_MODULE_0__.EnumsComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=944.js.map