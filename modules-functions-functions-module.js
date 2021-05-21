(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-functions-functions-module"],{

/***/ "YvYZ":
/*!********************************************************************!*\
  !*** ./apps/demo/src/app/modules/functions/functions.component.ts ***!
  \********************************************************************/
/*! exports provided: FunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsComponent", function() { return FunctionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "iVKv");


const code = `import {
    addFunctions,
    editFunctions,
    getFunctions,
    removeFunctions,
} from 'ng-morph';

addFunctions('some/**/**.ts', {
    isExported: true,
    name: 'b',
    statements: "return 'b'",
});

const declarations = getFunctions('some/path/**.ts');

editFunctions(functions, () => ({
    isExported: true,
    name: 'b',
    statements: "return 'b'",
}));

removeFunctions(declarations);
`;
class FunctionsComponent {
    constructor() {
        this.code = code;
    }
}
FunctionsComponent.ɵfac = function FunctionsComponent_Factory(t) { return new (t || FunctionsComponent)(); };
FunctionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunctionsComponent, selectors: [["functions"]], decls: 4, vars: 1, consts: [["header", "Functions"], ["filename", "migration.ts", 3, "code"]], template: function FunctionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get, edit and remove functions in your files with declarative descriptions and conditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5jdGlvbnMuc3R5bGUubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "fxFr":
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/functions/functions.module.ts ***!
  \*****************************************************************/
/*! exports provided: FunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsModule", function() { return FunctionsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "iVKv");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "fHwI");
/* harmony import */ var _functions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.component */ "YvYZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class FunctionsModule {
}
FunctionsModule.ɵfac = function FunctionsModule_Factory(t) { return new (t || FunctionsModule)(); };
FunctionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FunctionsModule });
FunctionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_functions_component__WEBPACK_IMPORTED_MODULE_3__["FunctionsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FunctionsModule, { declarations: [_functions_component__WEBPACK_IMPORTED_MODULE_3__["FunctionsComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_functions_component__WEBPACK_IMPORTED_MODULE_3__["FunctionsComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-functions-functions-module.js.map