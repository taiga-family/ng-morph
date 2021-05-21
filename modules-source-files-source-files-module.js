(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-source-files-source-files-module"],{

/***/ "SCpI":
/*!**************************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.component.ts ***!
  \**************************************************************************/
/*! exports provided: SourceFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceFilesComponent", function() { return SourceFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");


const code = `import {
    createSourceFile,
    getSourceFiles,
    moveSourceFilePaths,
} from 'ng-morph';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

createSourceFile('some/path/file.ts', 'const a = "hello";');

const sourceFiles = getSourceFiles('some/**/*.ts');

// It gets a function that process every file
moveSourceFilePaths(sourceFiles, dasherize);
`;
class SourceFilesComponent {
    constructor() {
        this.code = code;
    }
}
SourceFilesComponent.ɵfac = function SourceFilesComponent_Factory(t) { return new (t || SourceFilesComponent)(); };
SourceFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SourceFilesComponent, selectors: [["source-files"]], decls: 4, vars: 1, consts: [["header", "Source files"], ["filename", "migration.ts", 3, "code"]], template: function SourceFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You can create, get and move sources files of the project and their paths. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3VyY2UtZmlsZXMuc3R5bGUubGVzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "wL9k":
/*!***********************************************************************!*\
  !*** ./apps/demo/src/app/modules/source-files/source-files.module.ts ***!
  \***********************************************************************/
/*! exports provided: SourceFilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceFilesModule", function() { return SourceFilesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _source_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source-files.component */ "SCpI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class SourceFilesModule {
}
SourceFilesModule.ɵfac = function SourceFilesModule_Factory(t) { return new (t || SourceFilesModule)(); };
SourceFilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SourceFilesModule });
SourceFilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_source_files_component__WEBPACK_IMPORTED_MODULE_3__["SourceFilesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SourceFilesModule, { declarations: [_source_files_component__WEBPACK_IMPORTED_MODULE_3__["SourceFilesComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_source_files_component__WEBPACK_IMPORTED_MODULE_3__["SourceFilesComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-source-files-source-files-module.js.map