(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disclaimer-disclaimer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/disclaimer/disclaimer.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/disclaimer/disclaimer.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    \n  <ion-toolbar color= 'primary'>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/first\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Disclaimer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class= 'content'>\n  <p>\n    <b>JournalFilter.com </b> provides doctors with a tool to keep up-to-date in an age of information overflow and deterioration of information as it drifts away from its source. <br/>\n    JournalFilter.com provides easy access to the original source of research data. <br/>\n    The programme is still under development. Currently, only new research in Cardiology is covered. <br/>\n    Abstract data is kindly provided by the U.S. National Library of Medicine. <br/>\n    Please also read their disclaimer.<br/>\n    <b>JournalFilter.com </b> is a brainchild and scripting product of Jonas de Jong, MD and supported by the Stone and Ripple company.\n  </p>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/disclaimer/disclaimer-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/disclaimer/disclaimer-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DisclaimerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerPageRoutingModule", function() { return DisclaimerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _disclaimer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disclaimer.page */ "./src/app/disclaimer/disclaimer.page.ts");




const routes = [
    {
        path: '',
        component: _disclaimer_page__WEBPACK_IMPORTED_MODULE_3__["DisclaimerPage"]
    }
];
let DisclaimerPageRoutingModule = class DisclaimerPageRoutingModule {
};
DisclaimerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisclaimerPageRoutingModule);



/***/ }),

/***/ "./src/app/disclaimer/disclaimer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.module.ts ***!
  \*************************************************/
/*! exports provided: DisclaimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerPageModule", function() { return DisclaimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disclaimer-routing.module */ "./src/app/disclaimer/disclaimer-routing.module.ts");
/* harmony import */ var _disclaimer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disclaimer.page */ "./src/app/disclaimer/disclaimer.page.ts");







let DisclaimerPageModule = class DisclaimerPageModule {
};
DisclaimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisclaimerPageRoutingModule"]
        ],
        declarations: [_disclaimer_page__WEBPACK_IMPORTED_MODULE_6__["DisclaimerPage"]]
    })
], DisclaimerPageModule);



/***/ }),

/***/ "./src/app/disclaimer/disclaimer.page.scss":
/*!*************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmF6eWJlYXIvRG93bmxvYWRzL215QXBwaW9zMi9qb3VybmFsL3NyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGlzY2xhaW1lci9kaXNjbGFpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NsYWltZXIvZGlzY2xhaW1lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iLCIuY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/disclaimer/disclaimer.page.ts":
/*!***********************************************!*\
  !*** ./src/app/disclaimer/disclaimer.page.ts ***!
  \***********************************************/
/*! exports provided: DisclaimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerPage", function() { return DisclaimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisclaimerPage = class DisclaimerPage {
    constructor() { }
    ngOnInit() {
    }
};
DisclaimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disclaimer',
        template: __webpack_require__(/*! raw-loader!./disclaimer.page.html */ "./node_modules/raw-loader/index.js!./src/app/disclaimer/disclaimer.page.html"),
        styles: [__webpack_require__(/*! ./disclaimer.page.scss */ "./src/app/disclaimer/disclaimer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DisclaimerPage);



/***/ })

}]);
//# sourceMappingURL=disclaimer-disclaimer-module-es2015.js.map