(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-inject-sample-inject-sample-module"],{

/***/ "+CBF":
/*!****************************************************************************!*\
  !*** ./apps/demo/src/app/modules/inject-sample/inject-sample.component.ts ***!
  \****************************************************************************/
/*! exports provided: InjectSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectSampleComponent", function() { return InjectSampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");



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
}
InjectSampleComponent.ɵfac = function InjectSampleComponent_Factory(t) { return new (t || InjectSampleComponent)(); };
InjectSampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InjectSampleComponent, selectors: [["inject-sample"]], decls: 14, vars: 1, consts: [["header", "@Inject -> inject example"], ["tuiLink", "", "href", "https://stackblitz.com/edit/ts-angular-13-web-container-starter-ozrudz?file=ng-morph-scripts%2Fscript.ts,src%2Fapp%2Fapp.component.html", "target", "_blank"], ["filename", "migration.ts", 3, "code"]], template: function InjectSampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This is an example of code that migrates your project from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "@Inject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " constructor injections to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "inject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You can also try it out on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stackblitz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-doc-code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.example);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmplY3Qtc2FtcGxlLnN0eWxlLmxlc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "0XWf":
/*!*************************************************************************!*\
  !*** ./apps/demo/src/app/modules/inject-sample/inject-sample.module.ts ***!
  \*************************************************************************/
/*! exports provided: InjectSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectSampleModule", function() { return InjectSampleModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _inject_sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inject-sample.component */ "+CBF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class InjectSampleModule {
}
InjectSampleModule.ɵfac = function InjectSampleModule_Factory(t) { return new (t || InjectSampleModule)(); };
InjectSampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InjectSampleModule });
InjectSampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_inject_sample_component__WEBPACK_IMPORTED_MODULE_3__["InjectSampleComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InjectSampleModule, { declarations: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_3__["InjectSampleComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_inject_sample_component__WEBPACK_IMPORTED_MODULE_3__["InjectSampleComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-inject-sample-inject-sample-module.js.map