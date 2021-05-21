(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-classes-classes-module"],{

/***/ "NeMO":
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/decorators.ts ***!
  \*****************************************************************/
/*! exports provided: DECORATORS_SAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECORATORS_SAMPLES", function() { return DECORATORS_SAMPLES; });
const DECORATORS_SAMPLES = `import {
    addDecorators,
    getDecorators,
    editDecorators,
    removeDecorators,
} from 'ng-morph/project';

const classes = getClasses('some/path/file.ts');
const methods = getMethods(classes, { name: 'method' });
const constructorParams = getParams(getConstructors(classes), {
  name: 'param',
});
const methodParams = getParams(methods);
const properties = getProperties(classes, { name: 'property' });
const getAccessorss = getAccessors(classes, { name: 'getAccessor' });
const setAccessors = getAccessors(classes, { name: 'setAccessor' });

addDecorators(classes, {
  name: 'Component',
  arguments: ["{template: ''}"],
});

addDecorators(methods, {
  name: 'Required',
  arguments: [],
});

addDecorators(constructorParams, {
  name: 'Optional',
  arguments: [],
});

addDecorators(methodParams, {
  name: 'Pure',
  arguments: [],
});

addDecorators(properties, {
  name: 'ContentChild',
  arguments: ['SomeComponent'],
});

addDecorators(getAccessorss, {
  name: 'AnotherDecorator',
  arguments: ['SomeComponent', "['string']"],
});

addDecorators(setAccessors, {
  name: 'SetDecorator',
  arguments: ["[1, 3]"],
});

const declarations = getAllDecorators('some/path/**.ts', {
    name: 'Inject',
});

editDecorators(declarations, () => ({
    name: 'Directive',
}));

removeDecorators(declarations);
`;


/***/ }),

/***/ "V7Qe":
/*!*************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/classes.module.ts ***!
  \*************************************************************/
/*! exports provided: ClassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesModule", function() { return ClassesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "11mb");
/* harmony import */ var _classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes.component */ "yoc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class ClassesModule {
}
ClassesModule.ɵfac = function ClassesModule_Factory(t) { return new (t || ClassesModule)(); };
ClassesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ClassesModule });
ClassesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["generateRoutes"])(_classes_component__WEBPACK_IMPORTED_MODULE_3__["ClassesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClassesModule, { declarations: [_classes_component__WEBPACK_IMPORTED_MODULE_3__["ClassesComponent"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_classes_component__WEBPACK_IMPORTED_MODULE_3__["ClassesComponent"]] }); })();


/***/ }),

/***/ "e/wX":
/*!****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/accessors.ts ***!
  \****************************************************************/
/*! exports provided: ACCESSORS_SAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESSORS_SAMPLES", function() { return ACCESSORS_SAMPLES; });
const ACCESSORS_SAMPLES = `import {
    addAccessors,
    getAccessors,
    editAccessors,
    removeAccessors,
} from 'ng-morph/project';

addAccessors(getClasses('some/path/file.ts'), [
    {
      name: 'setter',
      kind: StructureKind.SetAccessor,
    },
]);
    
const declarations = getAccessors(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editAccessors(declarations, () => ({
    name: 'anotherName',
}));

removeAccessors(declarations);
`;


/***/ }),

/***/ "qvMj":
/*!******************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/contructors.ts ***!
  \******************************************************************/
/*! exports provided: CONSTRUCTORS_SAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTRUCTORS_SAMPLES", function() { return CONSTRUCTORS_SAMPLES; });
const CONSTRUCTORS_SAMPLES = `import {
    addConstructors,
    getConstructors,
    editConstructors,
    removeConstructors,
} from 'ng-morph/project';

addConstructors(getClasses('some/path/file.ts', { name: 'B' }), {
    parameters: [
      {
        decorators: [{ name: 'Inject', arguments: ['SomeType'] }],
        name: 'param',
        type: 'SomeType',
      },
    ],
    scope: Scope.Protected,
});

// Result is:
class B {
    protected constructor(@Inject(SomeType) param: SomeType) {}
}

const declarations = getConstructors(getClasses('some/path/**.ts'));

editConstructors(declarations, () => ({
    scope: Scope.Protected,
}));

removeConstructors(declarations);
`;


/***/ }),

/***/ "rU5S":
/*!**************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/methods.ts ***!
  \**************************************************************/
/*! exports provided: METHODS_SAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHODS_SAMPLES", function() { return METHODS_SAMPLES; });
const METHODS_SAMPLES = `import {
    addMethods,
    getMethods,
    editMethods,
    removeMethods,
} from 'ng-morph/project';

addMethods(getClasses('some/path/file.ts', { name: 'B' }), {
    name: 'test',
    statements: 'return 0;',
    returnType: 'number',
});
    
const declarations = getMethods(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editMethods(declarations, ({ isAsync }) => ({
    name: 'b',
    isAsync: !isAsync,
}));

removeMethods(declarations);
`;


/***/ }),

/***/ "x3As":
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/properties.ts ***!
  \*****************************************************************/
/*! exports provided: PROPERTIES_SAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES_SAMPLES", function() { return PROPERTIES_SAMPLES; });
const PROPERTIES_SAMPLES = `import {
    addProperties,
    getProperties,
    editProperties,
    removeProperties,
} from 'ng-morph/project';

addProperties(getClasses('some/path/file.ts', { name: 'B' }), {
    name: 'test',
    initializer: '3',
});
    
const declarations = getProperties(getClasses('some/path/**.ts'), {
    name: 'd',
    isStatic: true,
});

editProperties(declarations, () => ({
    name: 'b',
    initializer: "'s'",
}));

removeProperties(declarations);
`;


/***/ }),

/***/ "yoc2":
/*!****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/classes.component.ts ***!
  \****************************************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var _samples_accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples/accessors */ "e/wX");
/* harmony import */ var _samples_contructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples/contructors */ "qvMj");
/* harmony import */ var _samples_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples/decorators */ "NeMO");
/* harmony import */ var _samples_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples/methods */ "rU5S");
/* harmony import */ var _samples_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./samples/properties */ "x3As");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "gul7");







function ClassesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "You can manipulate with classes using the following utils");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " You can generate a class from declarative description. Use autocomplete to check all the abilities. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Get classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " You can get all classes with some declarative condition. Use autocomplete to check all the abilities. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Edit classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " You can edit existing classes with a handler returining a declarative description. Use autocomplete to check all the abilities. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Remove classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " You can remove all classes with some declarative condition. Use autocomplete to check all the abilities. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r0.add);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r0.getClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r0.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r0.remove);
} }
function ClassesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You can create, get, edit and remove constructors of your classes with declarative descriptions and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-doc-code", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r1.constructors);
} }
function ClassesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You can create, get, edit and remove methods of your classes with declarative descriptions and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-doc-code", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r2.methods);
} }
function ClassesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You can create, get, edit and remove properties of your classes with declarative descriptions and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-doc-code", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r3.properties);
} }
function ClassesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You can create, get, edit and remove accessors of your classes with declarative descriptions and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-doc-code", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r4.accessors);
} }
function ClassesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You can create, get, edit and remove decorators of your classes with declarative descriptions and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "tui-doc-code", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("code", ctx_r5.decorators);
} }
const add = `import {
    addClasses,
} from 'ng-morph';

addClasses('some/path/file.ts', {
    name: 'A',
    isDefaultExport: true,
    methods: [
      {
        name: 'method',
        isStatic: true,
        statements: 'return 0',
        returnType: 'number',
      },
    ],
});`;
const edit = `import {
    getClasses,
    editClasses,
} from 'ng-morph';

const classes = getClasses('some/path/file.ts');

editClasses(classes, classEntity => ({
  isExported: true,
  name: classEntity.name.replace('Test', ''),
}));`;
const remove = `import {
    removeClasses,
} from 'ng-morph';

removeClasses(getClasses('**/**', { name: 'A' }));`;
const getClasses = `import {
    getClasses,
} from 'ng-morph';

const allClassesWithNameB = getClasses('some/path/**.ts', {
    name: 'B',
});
`;
class ClassesComponent {
    constructor() {
        this.add = add;
        this.edit = edit;
        this.remove = remove;
        this.getClasses = getClasses;
        this.accessors = _samples_accessors__WEBPACK_IMPORTED_MODULE_0__["ACCESSORS_SAMPLES"];
        this.methods = _samples_methods__WEBPACK_IMPORTED_MODULE_3__["METHODS_SAMPLES"];
        this.properties = _samples_properties__WEBPACK_IMPORTED_MODULE_4__["PROPERTIES_SAMPLES"];
        this.decorators = _samples_decorators__WEBPACK_IMPORTED_MODULE_2__["DECORATORS_SAMPLES"];
        this.constructors = _samples_contructors__WEBPACK_IMPORTED_MODULE_1__["CONSTRUCTORS_SAMPLES"];
    }
}
ClassesComponent.ɵfac = function ClassesComponent_Factory(t) { return new (t || ClassesComponent)(); };
ClassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClassesComponent, selectors: [["classes"]], decls: 7, vars: 0, consts: [["header", "Classes"], ["pageTab", "Classes"], ["pageTab", "Constructors"], ["pageTab", "Methods"], ["pageTab", "Properties"], ["pageTab", "Accessors"], ["pageTab", "Decorators"], ["filename", "migration.ts", 3, "code"]], template: function ClassesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClassesComponent_ng_template_1_Template, 26, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ClassesComponent_ng_template_2_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ClassesComponent_ng_template_3_Template, 3, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ClassesComponent_ng_template_4_Template, 3, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ClassesComponent_ng_template_5_Template, 3, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ClassesComponent_ng_template_6_Template, 3, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzc2VzLnN0eWxlLmxlc3MifQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=modules-classes-classes-module.js.map