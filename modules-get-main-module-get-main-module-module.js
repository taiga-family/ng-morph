(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-get-main-module-get-main-module-module"],{

/***/ "++Xo":
/*!********************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-main-module/get-main-module.component.ts ***!
  \********************************************************************************/
/*! exports provided: GetMainModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMainModuleComponent", function() { return GetMainModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");


const code = `import {
    getMainModule
} from 'ng-morph';

const classDeclaration = getMainModule('src/main.ts');
`;
class GetMainModuleComponent {
    constructor() {
        this.code = code;
    }
}
GetMainModuleComponent.ɵfac = function GetMainModuleComponent_Factory(t) { return new (t || GetMainModuleComponent)(); };
GetMainModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetMainModuleComponent, selectors: [["get-main-module"]], decls: 4, vars: 1, consts: [["header", "Get main module"], ["filename", "migration.ts", 3, "code"]], template: function GetMainModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finds a main module of Angular application in path pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtbWFpbi1tb2R1bGUuc3R5bGUubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "PZ1c":
/*!*****************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-main-module/get-main-module.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GetMainModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMainModuleModule", function() { return GetMainModuleModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _get_main_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-main-module.component */ "++Xo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GetMainModuleModule {
}
GetMainModuleModule.ɵfac = function GetMainModuleModule_Factory(t) { return new (t || GetMainModuleModule)(); };
GetMainModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GetMainModuleModule });
GetMainModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_get_main_module_component__WEBPACK_IMPORTED_MODULE_3__["GetMainModuleComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GetMainModuleModule, { declarations: [_get_main_module_component__WEBPACK_IMPORTED_MODULE_3__["GetMainModuleComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_get_main_module_component__WEBPACK_IMPORTED_MODULE_3__["GetMainModuleComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-get-main-module-get-main-module-module.js.map