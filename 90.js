"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[90],{

/***/ 90:
/*!****************************************************!*\
  !*** ./apps/demo/src/app/pages/variables/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 9440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6623);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 73);
var _VariablesComponent;



const code = `import {
    addVariables,
    editVariables,
    getVariables,
    removeVariables,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;
class VariablesComponent {
  constructor() {
    this.code = code;
  }
}
_VariablesComponent = VariablesComponent;
_VariablesComponent.ɵfac = function VariablesComponent_Factory(t) {
  return new (t || _VariablesComponent)();
};
_VariablesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _VariablesComponent,
  selectors: [["variables"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Variables"], ["filename", "migration.ts", 3, "code"]],
  template: function VariablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can create, get, edit and remove variables in your files with declarative descriptions and conditions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiAddonDocModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocCodeComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocPageComponent],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariablesComponent);

/***/ })

}]);
//# sourceMappingURL=90.js.map