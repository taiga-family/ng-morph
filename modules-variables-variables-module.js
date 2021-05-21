(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-variables-variables-module"],{

/***/ "Q9Q6":
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/variables/variables.module.ts ***!
  \*****************************************************************/
/*! exports provided: VariablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesModule", function() { return VariablesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "iVKv");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "fHwI");
/* harmony import */ var _variables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.component */ "sI8Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class VariablesModule {
}
VariablesModule.ɵfac = function VariablesModule_Factory(t) { return new (t || VariablesModule)(); };
VariablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VariablesModule });
VariablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_variables_component__WEBPACK_IMPORTED_MODULE_3__["VariablesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VariablesModule, { declarations: [_variables_component__WEBPACK_IMPORTED_MODULE_3__["VariablesComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_variables_component__WEBPACK_IMPORTED_MODULE_3__["VariablesComponent"]] }); })();


/***/ }),

/***/ "sI8Z":
/*!********************************************************************!*\
  !*** ./apps/demo/src/app/modules/variables/variables.component.ts ***!
  \********************************************************************/
/*! exports provided: VariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesComponent", function() { return VariablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "iVKv");


const code = `import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
} from 'ng-morph';

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
`;
class VariablesComponent {
    constructor() {
        this.code = code;
    }
}
VariablesComponent.ɵfac = function VariablesComponent_Factory(t) { return new (t || VariablesComponent)(); };
VariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VariablesComponent, selectors: [["variables"]], decls: 4, vars: 1, consts: [["header", "Variables"], ["filename", "migration.ts", 3, "code"]], template: function VariablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get, edit and remove variables in your files with declarative descriptions and conditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXJpYWJsZXMuc3R5bGUubGVzcyJ9 */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-variables-variables-module.js.map