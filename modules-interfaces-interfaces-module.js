(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-interfaces-interfaces-module"],{

/***/ "RsdJ":
/*!**********************************************************************!*\
  !*** ./apps/demo/src/app/modules/interfaces/interfaces.component.ts ***!
  \**********************************************************************/
/*! exports provided: InterfacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfacesComponent", function() { return InterfacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");


const interfaces = `import {
    addInterfaces,
    editInterfaces,
    getInterfaces,
    removeInterfaces,
} from 'ng-morph';

addInterfaces('some/path/file.ts', {
    name: 'A',
    properties: [{ name: 's', type: 'string' }],
    methods: [{ name: 'method', returnType: 'number' }],
});

const declarations = getInterfaces('some/path/**.ts');

editInterfaces(declarations, () => ({
    name: 'B',
}));

removeInterfaces(declarations);
`;
class InterfacesComponent {
    constructor() {
        this.interfaces = interfaces;
    }
}
InterfacesComponent.ɵfac = function InterfacesComponent_Factory(t) { return new (t || InterfacesComponent)(); };
InterfacesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterfacesComponent, selectors: [["interfaces"]], decls: 4, vars: 1, consts: [["header", "Interfaces"], ["filename", "migration.ts", 3, "code"]], template: function InterfacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get, edit and remove interfaces in your files with declarative descriptions and conditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.interfaces);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmZhY2VzLnN0eWxlLmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "vU32":
/*!*******************************************************************!*\
  !*** ./apps/demo/src/app/modules/interfaces/interfaces.module.ts ***!
  \*******************************************************************/
/*! exports provided: InterfacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfacesModule", function() { return InterfacesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _interfaces_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces.component */ "RsdJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class InterfacesModule {
}
InterfacesModule.ɵfac = function InterfacesModule_Factory(t) { return new (t || InterfacesModule)(); };
InterfacesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InterfacesModule });
InterfacesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_interfaces_component__WEBPACK_IMPORTED_MODULE_3__["InterfacesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InterfacesModule, { declarations: [_interfaces_component__WEBPACK_IMPORTED_MODULE_3__["InterfacesComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_interfaces_component__WEBPACK_IMPORTED_MODULE_3__["InterfacesComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-interfaces-interfaces-module.js.map