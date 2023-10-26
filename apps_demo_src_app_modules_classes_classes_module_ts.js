"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["apps_demo_src_app_modules_classes_classes_module_ts"],{

/***/ 6793:
/*!****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/classes.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassesComponent: () => (/* binding */ ClassesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _samples_accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples/accessors */ 3105);
/* harmony import */ var _samples_contructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples/contructors */ 6672);
/* harmony import */ var _samples_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples/decorators */ 1851);
/* harmony import */ var _samples_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples/methods */ 8589);
/* harmony import */ var _samples_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./samples/properties */ 9928);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);








const add = `import {
    addClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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
});

saveActiveProject();
`;
const edit = `import {
    getClasses,
    editClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const classes = getClasses('some/path/file.ts');

editClasses(classes, classEntity => ({
  isExported: true,
  name: classEntity.name.replace('Test', ''),
}));

saveActiveProject();
`;
const remove = `import {
    removeClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

removeClasses(getClasses('**/**', { name: 'A' }));`;
const getClasses = `import {
    getClasses,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

const allClassesWithNameB = getClasses('some/path/**.ts', {
    name: 'B',
});

saveActiveProject();
`;
class ClassesComponent {
  constructor() {
    this.add = add;
    this.edit = edit;
    this.remove = remove;
    this.getClasses = getClasses;
    this.accessors = _samples_accessors__WEBPACK_IMPORTED_MODULE_0__.ACCESSORS_SAMPLES;
    this.methods = _samples_methods__WEBPACK_IMPORTED_MODULE_3__.METHODS_SAMPLES;
    this.properties = _samples_properties__WEBPACK_IMPORTED_MODULE_4__.PROPERTIES_SAMPLES;
    this.decorators = _samples_decorators__WEBPACK_IMPORTED_MODULE_2__.DECORATORS_SAMPLES;
    this.constructors = _samples_contructors__WEBPACK_IMPORTED_MODULE_1__.CONSTRUCTORS_SAMPLES;
  }
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
    type: ClassesComponent,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵFactoryTarget"].Component
  });
  static #_2 = this.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareComponent"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    type: ClassesComponent,
    selector: "classes",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
    template: "<tui-doc-page header=\"Classes\">\n  <ng-template pageTab=\"Classes\">\n    <p>You can manipulate with classes using the following utils</p>\n\n    <section>\n      <h2>Add classes</h2>\n\n      <p>\n        You can generate a class from declarative description. Use autocomplete\n        to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"add\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Get classes</h2>\n\n      <p>\n        You can get all classes with some declarative condition. Use\n        autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"getClasses\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Edit classes</h2>\n\n      <p>\n        You can edit existing classes with a handler returining a declarative\n        description. Use autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"edit\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Remove classes</h2>\n\n      <p>\n        You can remove all classes with some declarative condition. Use\n        autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"remove\"></tui-doc-code>\n    </section>\n  </ng-template>\n\n  <ng-template pageTab=\"Constructors\">\n    <p>\n      You can create, get, edit and remove constructors of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"constructors\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Methods\">\n    <p>\n      You can create, get, edit and remove methods of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"methods\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Properties\">\n    <p>\n      You can create, get, edit and remove properties of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"properties\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Accessors\">\n    <p>\n      You can create, get, edit and remove accessors of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"accessors\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Decorators\">\n    <p>\n      You can create, get, edit and remove decorators of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"decorators\"></tui-doc-code>\n  </ng-template>\n</tui-doc-page>\n",
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    dependencies: [{
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TuiDocCodeComponent,
      selector: "tui-doc-code",
      inputs: ["filename", "code"]
    }, {
      kind: "component",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TuiDocPageComponent,
      selector: "tui-doc-page",
      inputs: ["header", "package", "type", "path", "deprecated"]
    }, {
      kind: "directive",
      type: _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_6__.TuiDocPageTabConnectorDirective,
      selector: "[pageTab]",
      inputs: ["pageTab"]
    }],
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
  type: ClassesComponent,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component,
    args: [{
      selector: 'classes',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
      template: "<tui-doc-page header=\"Classes\">\n  <ng-template pageTab=\"Classes\">\n    <p>You can manipulate with classes using the following utils</p>\n\n    <section>\n      <h2>Add classes</h2>\n\n      <p>\n        You can generate a class from declarative description. Use autocomplete\n        to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"add\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Get classes</h2>\n\n      <p>\n        You can get all classes with some declarative condition. Use\n        autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"getClasses\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Edit classes</h2>\n\n      <p>\n        You can edit existing classes with a handler returining a declarative\n        description. Use autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"edit\"></tui-doc-code>\n    </section>\n\n    <section>\n      <h2>Remove classes</h2>\n\n      <p>\n        You can remove all classes with some declarative condition. Use\n        autocomplete to check all the abilities.\n      </p>\n\n      <tui-doc-code filename=\"migration.ts\" [code]=\"remove\"></tui-doc-code>\n    </section>\n  </ng-template>\n\n  <ng-template pageTab=\"Constructors\">\n    <p>\n      You can create, get, edit and remove constructors of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"constructors\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Methods\">\n    <p>\n      You can create, get, edit and remove methods of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"methods\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Properties\">\n    <p>\n      You can create, get, edit and remove properties of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"properties\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Accessors\">\n    <p>\n      You can create, get, edit and remove accessors of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"accessors\"></tui-doc-code>\n  </ng-template>\n\n  <ng-template pageTab=\"Decorators\">\n    <p>\n      You can create, get, edit and remove decorators of your classes with\n      declarative descriptions and conditions.\n    </p>\n\n    <tui-doc-code filename=\"migration.ts\" [code]=\"decorators\"></tui-doc-code>\n  </ng-template>\n</tui-doc-page>\n",
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    }]
  }]
});

/***/ }),

/***/ 8484:
/*!*************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/classes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassesModule: () => (/* binding */ ClassesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2454);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5948);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ 103);
/* harmony import */ var _classes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.component */ 6793);







class ClassesModule {
  static #_ = this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ClassesModule,
    deps: [],
    target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
  });
  static #_2 = this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
    minVersion: "14.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ClassesModule,
    declarations: [_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent],
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent]
  });
  static #_3 = this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
    minVersion: "12.0.0",
    version: "16.2.11",
    ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
    type: ClassesModule,
    imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent))]
  });
}

_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
  minVersion: "12.0.0",
  version: "16.2.11",
  ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
  type: ClassesModule,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiLinkModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__.TuiAddonDocModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild((0,_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__.tuiGenerateRoutes)(_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent))],
      declarations: [_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent],
      exports: [_classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent]
    }]
  }]
});

/***/ }),

/***/ 3105:
/*!****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/accessors.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCESSORS_SAMPLES: () => (/* binding */ ACCESSORS_SAMPLES)
/* harmony export */ });
const ACCESSORS_SAMPLES = `import {
    addAccessors,
    getAccessors,
    editAccessors,
    removeAccessors,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

/***/ }),

/***/ 6672:
/*!******************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/contructors.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTRUCTORS_SAMPLES: () => (/* binding */ CONSTRUCTORS_SAMPLES)
/* harmony export */ });
const CONSTRUCTORS_SAMPLES = `import {
    addConstructors,
    getConstructors,
    editConstructors,
    removeConstructors,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

/***/ }),

/***/ 1851:
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/decorators.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DECORATORS_SAMPLES: () => (/* binding */ DECORATORS_SAMPLES)
/* harmony export */ });
const DECORATORS_SAMPLES = `import {
    addDecorators,
    getDecorators,
    editDecorators,
    removeDecorators,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

/***/ }),

/***/ 8589:
/*!**************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/methods.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   METHODS_SAMPLES: () => (/* binding */ METHODS_SAMPLES)
/* harmony export */ });
const METHODS_SAMPLES = `import {
    addMethods,
    getMethods,
    editMethods,
    removeMethods,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

/***/ }),

/***/ 9928:
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/modules/classes/samples/properties.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROPERTIES_SAMPLES: () => (/* binding */ PROPERTIES_SAMPLES)
/* harmony export */ });
const PROPERTIES_SAMPLES = `import {
    addProperties,
    getProperties,
    editProperties,
    removeProperties,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

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

saveActiveProject();
`;

/***/ })

}]);
//# sourceMappingURL=apps_demo_src_app_modules_classes_classes_module_ts.js.map