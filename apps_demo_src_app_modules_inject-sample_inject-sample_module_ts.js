"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_inject-sample_inject-sample_module_ts"],{

/***/ 206:
/*!****************************************************************************!*\
  !*** ./apps/demo/src/app/modules/inject-sample/inject-sample.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectSampleComponent: () => (/* binding */ InjectSampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);




const example = `import {
  setActiveProject,
  createProject,
  NgMorphTree,
  getClasses,
  getParams,
  getConstructors,
  saveActiveProject,
  getImports,
  editImports,
} from 'ng-morph';

setActiveProject(
  createProject(new NgMorphTree(), '/', ['**/*.ts', '**/*.json'])
);

const components = getClasses('**/*.ts', {
  name: '*Component',
});

components.forEach((component) => {
  const constructorParams = getParams(getConstructors(component));

  if (constructorParams.length === 0) {
    return;
  }

  fixInjectImport(component.getSourceFile().getFilePath());

  component.insertProperties(
    0,
    constructorParams.map((param) => ({
      name: param.getName(),
      type: param.getTypeNode().getText(),
      isReadonly: param.isReadonly(),
      scope: param.getScope(),
      initializer: \`inject(\${
        param.getDecorator('Inject')?.getArguments()[0].getText() ??
        param.getTypeNode().getText()
      })\`,
    }))
  );

  constructorParams.forEach((param) => {
    param.remove();
  });

  console.log(component.getSourceFile().getText());
});

// Uncomment the next line once you are ready to save the changes
// saveActiveProject();

console.log(
  'Uncomment saveActiveProject function once you are ready to save...'
);
console.log('ng-morph ✅');

function fixInjectImport(file: string) {
  const angularCoreImports = getImports(file, {
    moduleSpecifier: '@angular/core',
  });

  editImports(angularCoreImports, (entity) => ({
    namedImports: [...entity.namedImports, 'inject'],
  }));
}`;
class InjectSampleComponent {
  constructor() {
    this.example = example;
  }
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    type: InjectSampleComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: InjectSampleComponent,
    selector: "inject-sample",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
    template: "<tui-doc-page header=\"@Inject -> inject example\">\n  <p>\n    This is an example of code that migrates your project from\n    <code>@Inject</code> constructor injections to <code>inject</code> function\n  </p>\n\n  <p>\n    You can also try it out on\n    <a\n      tuiLink\n      href=\"https://stackblitz.com/edit/ts-angular-13-web-container-starter-ozrudz?file=ng-morph-scripts%2Fscript.ts,src%2Fapp%2Fapp.component.html\"\n      target=\"_blank\"\n      >Stackblitz</a\n    >\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"example\"></tui-doc-code>\n</tui-doc-page>\n",
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkComponent,
      selector: "a[tuiLink], button[tuiLink]",
      inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"],
      exportAs: ["tuiLink"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocCodeComponent,
      selector: "tui-doc-code",
      inputs: ["filename", "code"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocPageComponent,
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
  type: InjectSampleComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'inject-sample',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"@Inject -> inject example\">\n  <p>\n    This is an example of code that migrates your project from\n    <code>@Inject</code> constructor injections to <code>inject</code> function\n  </p>\n\n  <p>\n    You can also try it out on\n    <a\n      tuiLink\n      href=\"https://stackblitz.com/edit/ts-angular-13-web-container-starter-ozrudz?file=ng-morph-scripts%2Fscript.ts,src%2Fapp%2Fapp.component.html\"\n      target=\"_blank\"\n      >Stackblitz</a\n    >\n  </p>\n\n  <tui-doc-code filename=\"migration.ts\" [code]=\"example\"></tui-doc-code>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

/***/ }),

/***/ 7482:
/*!*************************************************************************!*\
  !*** ./apps/demo/src/app/modules/inject-sample/inject-sample.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectSampleModule: () => (/* binding */ InjectSampleModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _inject_sample_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject-sample.component */ 206);







class InjectSampleModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InjectSampleModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InjectSampleModule,
    declarations: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: InjectSampleModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: InjectSampleModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent))],
      declarations: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent],
      exports: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_0__.InjectSampleComponent]
    }]
  }]
});

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_inject-sample_inject-sample_module_ts.js.map