"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[278],{

/***/ 4050:
/*!****************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/imports-and-exports/imports-and-exports.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportsAndExportsComponent: () => (/* binding */ ImportsAndExportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);


function ImportsAndExportsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can create, get, edit and remove imports in your files with declarative descriptions and conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-doc-code", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.imports);
  }
}
function ImportsAndExportsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can create, get, edit and remove exports in your files with declarative descriptions and conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-doc-code", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exports);
  }
}
const imports = `import {
    addImports,
    editImports,
    getImports,
    removeImports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addImports('some/path/file.ts', [
    {
      namedImports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      defaultImport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedImports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const imports = getImports('some/path/**.ts', {
    moduleSpecifier: 'd',
    namedImports: 'c',
});

editImports(imports, () => ({
    namedImports: ['b,c'],
}));

removeImports(imports);

saveActiveProject();
`;
const exportsSamples = `import {
    addExports,
    editExports,
    getExports,
    removeExports,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addExports('some/path/file.ts', [
    {
      namedExports: ['a'],
      moduleSpecifier: 'b',
    },
    {
      namespaceExport: 'c',
      moduleSpecifier: 'd',
    },
    {
      namedExports: ['e'],
      moduleSpecifier: 'f',
      isTypeOnly: true,
    },
]);

const exports = getExports('some/path/**.ts', {
    moduleSpecifier: 'd',
});

editExports(exports, () => ({
    namedExports: ['b,c'],
}));

removeExports(exports);

saveActiveProject();
`;
class ImportsAndExportsComponent {
  constructor() {
    this.imports = imports;
    this.exports = exportsSamples;
  }
  static #_ = this.ɵfac = function ImportsAndExportsComponent_Factory(t) {
    return new (t || ImportsAndExportsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImportsAndExportsComponent,
    selectors: [["imports-and-exports"]],
    decls: 3,
    vars: 0,
    consts: [["header", "Imports and exports"], ["pageTab", "Imports"], ["pageTab", "Exports"], ["filename", "migration.ts", 3, "code"]],
    template: function ImportsAndExportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImportsAndExportsComponent_ng_template_1_Template, 3, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImportsAndExportsComponent_ng_template_2_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageTabConnectorDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}


/***/ }),

/***/ 7278:
/*!*************************************************************************************!*\
  !*** ./apps/demo/src/app/modules/imports-and-exports/imports-and-exports.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportsAndExportsModule: () => (/* binding */ ImportsAndExportsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports-and-exports.component */ 4050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);






class ImportsAndExportsModule {
  static #_ = this.ɵfac = function ImportsAndExportsModule_Factory(t) {
    return new (t || ImportsAndExportsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ImportsAndExportsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent))]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImportsAndExportsModule, {
    declarations: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=278.js.map