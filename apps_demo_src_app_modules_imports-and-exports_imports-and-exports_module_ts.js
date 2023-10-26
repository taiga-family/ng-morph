"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_imports-and-exports_imports-and-exports_module_ts"],{

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
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: ImportsAndExportsComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: ImportsAndExportsComponent,
    selector: "imports-and-exports",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"Imports and exports\">\n  <ng-template pageTab=\"Imports\">\n    <p>\n      You can create, get, edit and remove imports in your files with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"imports\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Exports\">\n    <p>\n      You can create, get, edit and remove exports in your files with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"exports\"></tui-doc-code>\n  </ng-template>\n</tui-doc-page>\n",
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocCodeComponent,
      selector: "tui-doc-code",
      inputs: ["filename", "code"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageComponent,
      selector: "tui-doc-page",
      inputs: ["header", "package", "type", "path", "deprecated"]
    }, {
      kind: "directive",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiDocPageTabConnectorDirective,
      selector: "[pageTab]",
      inputs: ["pageTab"]
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: ImportsAndExportsComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'imports-and-exports',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Imports and exports\">\n  <ng-template pageTab=\"Imports\">\n    <p>\n      You can create, get, edit and remove imports in your files with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"imports\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Exports\">\n    <p>\n      You can create, get, edit and remove exports in your files with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"exports\"></tui-doc-code>\n  </ng-template>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports-and-exports.component */ 4050);







class ImportsAndExportsModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ImportsAndExportsModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ImportsAndExportsModule,
    declarations: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ImportsAndExportsModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: ImportsAndExportsModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent))],
      declarations: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent],
      exports: [_imports_and_exports_component__WEBPACK_IMPORTED_MODULE_0__.ImportsAndExportsComponent]
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_imports-and-exports_imports-and-exports_module_ts.js.map