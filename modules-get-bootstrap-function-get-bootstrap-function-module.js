(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-get-bootstrap-function-get-bootstrap-function-module"],{

/***/ "RqsS":
/*!*******************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-bootstrap-function/get-bootstrap-function.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: GetBootstrapFunctionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBootstrapFunctionModule", function() { return GetBootstrapFunctionModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-bootstrap-function.component */ "bCsX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GetBootstrapFunctionModule {
}
GetBootstrapFunctionModule.ɵfac = function GetBootstrapFunctionModule_Factory(t) { return new (t || GetBootstrapFunctionModule)(); };
GetBootstrapFunctionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GetBootstrapFunctionModule });
GetBootstrapFunctionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_3__["GetBootstrapFunctionComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GetBootstrapFunctionModule, { declarations: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_3__["GetBootstrapFunctionComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_get_bootstrap_function_component__WEBPACK_IMPORTED_MODULE_3__["GetBootstrapFunctionComponent"]] }); })();


/***/ }),

/***/ "bCsX":
/*!**********************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/get-bootstrap-function/get-bootstrap-function.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GetBootstrapFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBootstrapFunctionComponent", function() { return GetBootstrapFunctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");


const code = `import {
    getBootstrapFn
} from 'ng-morph';

const bootstrapFn = getBootstrapFn('src/main.ts');
`;
class GetBootstrapFunctionComponent {
    constructor() {
        this.code = code;
    }
}
GetBootstrapFunctionComponent.ɵfac = function GetBootstrapFunctionComponent_Factory(t) { return new (t || GetBootstrapFunctionComponent)(); };
GetBootstrapFunctionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetBootstrapFunctionComponent, selectors: [["get-bootstrap-function"]], decls: 4, vars: 1, consts: [["header", "Get bootstrap function"], ["filename", "migration.ts", 3, "code"]], template: function GetBootstrapFunctionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finds a bootstrap function of Angular application with a path pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtYm9vdHN0cmFwLWZ1bmN0aW9uLnN0eWxlLmxlc3MifQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-get-bootstrap-function-get-bootstrap-function-module.js.map