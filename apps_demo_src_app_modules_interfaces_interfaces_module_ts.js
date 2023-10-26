"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_interfaces_interfaces_module_ts"],{

/***/ 4902:
/*!**********************************************************************!*\
  !*** ./apps/demo/src/app/modules/interfaces/interfaces.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfacesComponent: () => (/* binding */ InterfacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);



const interfaces = `import {
    addInterfaces,
    editInterfaces,
    getInterfaces,
    removeInterfaces,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;
class InterfacesComponent {
  constructor() {
    this.interfaces = interfaces;
  }
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: InterfacesComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: InterfacesComponent,
    selector: "interfaces",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"Interfaces\">\n  <p>\n    You can create, get, edit and remove interfaces in your files with\n    declarative descriptions and conditions.\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"interfaces\"></tui-doc-code>\n</tui-doc-page>\n",
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
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
  type: InterfacesComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'interfaces',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Interfaces\">\n  <p>\n    You can create, get, edit and remove interfaces in your files with\n    declarative descriptions and conditions.\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"interfaces\"></tui-doc-code>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

/***/ }),

/***/ 6871:
/*!*******************************************************************!*\
  !*** ./apps/demo/src/app/modules/interfaces/interfaces.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfacesModule: () => (/* binding */ InterfacesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _interfaces_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces.component */ 4902);







class InterfacesModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InterfacesModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InterfacesModule,
    declarations: [_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InterfacesModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: InterfacesModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent))],
      declarations: [_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent],
      exports: [_interfaces_component__WEBPACK_IMPORTED_MODULE_0__.InterfacesComponent]
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_interfaces_interfaces_module_ts.js.map