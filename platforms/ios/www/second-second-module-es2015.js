(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js ***!
  \*****************************************************************************************/
/*! exports provided: StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTML_TEMPLATE = "\n<div class=\"ionic4-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
var CSS_STYLE = "\n    .ionic4-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
var StarRating = /** @class */ (function () {
    function StarRating(events) {
        this.events = events;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic
            };
        })();
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    StarRating_1 = StarRating;
    StarRating.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    StarRating.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    StarRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    StarRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    StarRating.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRating.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent 
        this.events.publish("star-rating:changed", this.rating); //common event for all instances included for backwards compatibility
        this.events.publish(this.eventInfo.topic, this.rating); //common event for all instances
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    var StarRating_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRating.prototype, "rating", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarRating.prototype, "ratingChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "activeIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "defaultIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "halfStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarRating.prototype, "maxRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StarRating.prototype, "fontSize", void 0);
    StarRating = StarRating_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ionic4-star-rating',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: StarRating_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], StarRating);
    return StarRating;
}());

//# sourceMappingURL=ionic4-star-rating-component.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/index.js ***!
  \*******************************************************/
/*! exports provided: StarRatingModule, StarRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic4-star-rating.module */ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return _ionic4_star_rating_module__WEBPACK_IMPORTED_MODULE_0__["StarRatingModule"]; });

/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ionic4-star-rating/dist/ionic4-star-rating.module.js ***!
  \***************************************************************************/
/*! exports provided: StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ionic4-star-rating-component */ "./node_modules/ionic4-star-rating/dist/components/ionic4-star-rating-component.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule_1 = StarRatingModule;
    StarRatingModule.forRoot = function () {
        return {
            ngModule: StarRatingModule_1,
        };
    };
    var StarRatingModule_1;
    StarRatingModule = StarRatingModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ],
            exports: [
                _components_ionic4_star_rating_component__WEBPACK_IMPORTED_MODULE_1__["StarRating"]
            ]
        })
    ], StarRatingModule);
    return StarRatingModule;
}());

//# sourceMappingURL=ionic4-star-rating.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/second/second.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/second/second.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <!-- <ion-toolbar color='primary' style='height:30px'>\n    </ion-toolbar> -->\n    <ion-toolbar color='primary'>\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"/first\" ></ion-back-button>\n            </ion-buttons>\n          <ion-title></ion-title>\n        </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\"  style = 'transform: scale(2); height: 100%;' *ngIf = 'spinner' >\n          <ion-spinner name='lines' ></ion-spinner>\n      </ion-row>\n      <div *ngIf = 'contents'>\n          <ion-item class = \"search \" style = 'margin-bottom: 5px;' lines='none'>\n                <ion-searchbar   [(ngModel)]=\"search\" ></ion-searchbar>\n              <ion-label>Filter</ion-label>\n              <ion-select aria-placeholder=\"Filter\" class=\"search-field\" interface='action-sheet' [(ngModel)]=\"filter\" (ionChange)=\"filterFunction($event)\">\n                  <ion-select-option value=\"recent\" selected>Most Recent</ion-select-option>\n                  <ion-select-option value=\"lastone\">Last Month</ion-select-option>\n                  <ion-select-option value=\"lastthree\">Last 3 Month</ion-select-option>\n                  <ion-select-option value=\"lastyear\">Last YEAR</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-list *ngFor='let item of information ; let i = index;' lines='none' class=\"accordion-list\" >\n              <!-- <ion-item  text-wrap detail='false' [href]=\"'/detail/' + item.title \" lines='none' > -->\n              \n              <div style = 'padding-top: 5px; padding-left: 5px;'>\n              <ion-item  text-wrap detail='false'  lines='none' class='dgcard' (click)='openModal(i) ' >\n                  <ion-row no-padding align-item-center >\n                      <ion-col size='12'>\n                          <span  class = 'sub-title '  style = 'font-size:1em'>{{item.title}}</span>\n                      </ion-col>\n                      <ion-col size='12' class = 'postman' >{{item.postman}}</ion-col>\n                      <ion-col size='12' class = 'dginfos'>\n                          <ion-row>\n                              <ion-col size='9' class = 'info'>{{item.info}}</ion-col>\n                              <ion-col size='3'>\n                                  <ionic4-star-rating #rating\n                                      activeIcon = \"ios-star\"\n                                      defaultIcon = \"ios-star-outline\" \n                                      activeColor = \"#ffa500\" \n                                      defaultColor = \"rgb(144, 144, 144)\"\n                                      readonly=\"true\"\n                                      rating= {{item.starval}}\n                                      fontSize = \"14px\"\n                                      >\n                                  </ionic4-star-rating>\n                              </ion-col>\n                          </ion-row>\n                      </ion-col>\n                  </ion-row>\n              </ion-item>\n          </div>\n          </ion-list>\n      </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/second/second-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/second/second-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SecondPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageRoutingModule", function() { return SecondPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second.page */ "./src/app/second/second.page.ts");




const routes = [
    {
        path: '',
        component: _second_page__WEBPACK_IMPORTED_MODULE_3__["SecondPage"]
    }
];
let SecondPageRoutingModule = class SecondPageRoutingModule {
};
SecondPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecondPageRoutingModule);



/***/ }),

/***/ "./src/app/second/second.module.ts":
/*!*****************************************!*\
  !*** ./src/app/second/second.module.ts ***!
  \*****************************************/
/*! exports provided: SecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _second_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-routing.module */ "./src/app/second/second-routing.module.ts");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second.page */ "./src/app/second/second.page.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");








let SecondPageModule = class SecondPageModule {
};
SecondPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"],
            _second_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecondPageRoutingModule"]
        ],
        declarations: [_second_page__WEBPACK_IMPORTED_MODULE_6__["SecondPage"]]
    })
], SecondPageModule);



/***/ }),

/***/ "./src/app/second/second.page.scss":
/*!*****************************************!*\
  !*** ./src/app/second/second.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-light);\n}\n\n.sub-title {\n  color: #003bc1;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.postman {\n  color: #4b4b4b;\n  font-size: 12px;\n}\n\n.info {\n  color: #4b4b4b;\n  font-size: 12px;\n}\n\n.accordion-list {\n  margin-bottom: 5px;\n  padding-top: 5px;\n  background: transparent;\n  padding-right: 5px;\n}\n\n.links a {\n  font-size: 11px;\n  text-decoration: none;\n}\n\n.ribbon {\n  position: absolute;\n  right: 4px;\n  z-index: 1;\n  overflow: hidden;\n  width: 75px;\n  height: 75px;\n  text-align: right;\n  cursor: pointer;\n}\n\n.ribbon span {\n  font-size: 10px;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  line-height: 20px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 100px;\n  display: block;\n  background: #79A70A;\n  background: -webkit-gradient(linear, left top, left bottom, from(#9BC90D), to(#79A70A));\n  background: linear-gradient(#9BC90D 0%, #79A70A 100%);\n  box-shadow: 0 3px 10px -5px black;\n  position: absolute;\n  top: 19px;\n  right: -21px;\n}\n\n.ribbon span::before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid #79A70A;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #79A70A;\n}\n\n.ribbon span::after {\n  content: \"\";\n  position: absolute;\n  right: 0%;\n  top: 100%;\n  z-index: -1;\n  border-right: 3px solid #79A70A;\n  border-left: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #79A70A;\n}\n\n.blue span {\n  background: -webkit-gradient(linear, left top, left bottom, from(#2989d8), to(#1e5799));\n  background: linear-gradient(#2989d8 0%, #1e5799 100%);\n}\n\n.blue span::before {\n  border-left-color: #1e5799;\n  border-top-color: #1e5799;\n}\n\n.blue span::after {\n  border-right-color: #1e5799;\n  border-top-color: #1e5799;\n}\n\n.dgcard {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.dginfos {\n  margin-left: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmF6eWJlYXIvRG93bmxvYWRzL215QXBwaW9zMi9qb3VybmFsL3NyYy9hcHAvc2Vjb25kL3NlY29uZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlY29uZC9zZWNvbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURGSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0tSOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUFhLFlBQUE7RUFDYixpQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQztFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQW1CLGlCQUFBO0VBQ25CLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxZQUFBO0VBQWMsY0FBQTtFQUNkLG1CQUFBO0VBQ0EsdUZBQUE7RUFBQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQVcsWUFBQTtBQ09mOztBRExDO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLFNBQUE7RUFDWCxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUNTSjs7QURQQztFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFBVyxTQUFBO0VBQ1gsV0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FDV0o7O0FEVEM7RUFBWSx1RkFBQTtFQUFBLHFEQUFBO0FDYWI7O0FEWkM7RUFBb0IsMEJBQUE7RUFBNEIseUJBQUE7QUNpQmpEOztBRGhCQztFQUFtQiwyQkFBQTtFQUE2Qix5QkFBQTtBQ3FCakQ7O0FEbkJDO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ3NCTDs7QURwQkM7RUFDSSxpQkFBQTtBQ3VCTCIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC9zZWNvbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uc3ViLXRpdGxle1xuICAgIGNvbG9yOiAjMDAzYmMxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnBvc3RtYW4ge1xuICAgIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmluZm97XG4gICAgY29sb3I6cmdiKDc1LCA3NSwgNzUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY2NvcmRpb24tbGlzdHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ubGlua3N7XG4gICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG5cblxuLnJpYmJvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0cHg7IFxuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogNzVweDsgaGVpZ2h0OiA3NXB4OyBcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuIC5yaWJib24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmOyBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB3aWR0aDogMTAwcHg7IGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICM3OUE3MEE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM5QkM5MEQgMCUsICM3OUE3MEEgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTlweDsgcmlnaHQ6IC0yMXB4O1xuIH1cbiAucmliYm9uIHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBsZWZ0OiAwcHg7IHRvcDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3OUE3MEE7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNzlBNzBBO1xuIH1cbiAucmliYm9uIHNwYW46OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHJpZ2h0OiAwJTsgdG9wOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM3OUE3MEE7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM3OUE3MEE7XG4gfVxuIC5ibHVlIHNwYW4ge2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjk4OWQ4IDAlLCAjMWU1Nzk5IDEwMCUpO31cbiAuYmx1ZSBzcGFuOjpiZWZvcmUge2JvcmRlci1sZWZ0LWNvbG9yOiAjMWU1Nzk5OyBib3JkZXItdG9wLWNvbG9yOiAjMWU1Nzk5O31cbiAuYmx1ZSBzcGFuOjphZnRlciB7Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjMWU1Nzk5OyBib3JkZXItdG9wLWNvbG9yOiAjMWU1Nzk5O31cblxuIC5kZ2NhcmR7XG4gICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgIG1hcmdpbi1yaWdodDogNHB4O1xuIH1cbiAuZGdpbmZvc3tcbiAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gfVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGNvbG9yOiAjMDAzYmMxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wb3N0bWFuIHtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmluZm8ge1xuICBjb2xvcjogIzRiNGI0YjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWNjb3JkaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5saW5rcyBhIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yaWJib24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yaWJib24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICM3OUE3MEE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOUJDOTBEIDAlLCAjNzlBNzBBIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IC01cHggYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICByaWdodDogLTIxcHg7XG59XG5cbi5yaWJib24gc3Bhbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzc5QTcwQTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM3OUE3MEE7XG59XG5cbi5yaWJib24gc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTtcbiAgdG9wOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzc5QTcwQTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzc5QTcwQTtcbn1cblxuLmJsdWUgc3BhbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjk4OWQ4IDAlLCAjMWU1Nzk5IDEwMCUpO1xufVxuXG4uYmx1ZSBzcGFuOjpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzFlNTc5OTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFlNTc5OTtcbn1cblxuLmJsdWUgc3Bhbjo6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMxZTU3OTk7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxZTU3OTk7XG59XG5cbi5kZ2NhcmQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRnaW5mb3Mge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/second/second.page.ts":
/*!***************************************!*\
  !*** ./src/app/second/second.page.ts ***!
  \***************************************/
/*! exports provided: SecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPage", function() { return SecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");






let SecondPage = class SecondPage {
    constructor(route, http, modalCtrl) {
        this.route = route;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.spinner = true;
        this.contents = false;
    }
    ngOnInit() {
        this.slug = this.route.snapshot.paramMap.get('title');
        this.title = this.route.snapshot.paramMap.get('name');
        this.http.get('https://www.journalfilter.com/Api.php?q=3months&discipline=cardiology' + this.slug).subscribe(res => {
            this.information = res;
            this.spinner = false;
            this.contents = true;
        });
    }
    filterFunction(event) {
        this.spinner = true;
        this.contents = false;
        if (event.detail.value == 'recent') {
            this.slug = this.route.snapshot.paramMap.get('title');
            this.title = this.route.snapshot.paramMap.get('name');
            this.http.get('https://www.journalfilter.com/Api.php?q=week&discipline=cardiology' + this.slug + '&search=' + this.search).subscribe(res => {
                this.information = res;
                this.spinner = false;
                this.contents = true;
            });
        }
        if (event.detail.value == 'lastone') {
            this.slug = this.route.snapshot.paramMap.get('title');
            this.title = this.route.snapshot.paramMap.get('name');
            this.http.get('https://www.journalfilter.com/Api.php?q=month&discipline=cardiology' + this.slug + '&search=' + this.search).subscribe(res => {
                this.information = res;
                this.spinner = false;
                this.contents = true;
            });
        }
        if (event.detail.value == 'lastthree') {
            this.slug = this.route.snapshot.paramMap.get('title');
            this.title = this.route.snapshot.paramMap.get('name');
            this.http.get('https://www.journalfilter.com/Api.php?q=3months&discipline=cardiology' + this.slug + '&search=' + this.search).subscribe(res => {
                this.information = res;
                this.spinner = false;
                this.contents = true;
            });
        }
        if (event.detail.value == 'lastyear') {
            this.slug = this.route.snapshot.paramMap.get('title');
            this.title = this.route.snapshot.paramMap.get('name');
            this.http.get('https://www.journalfilter.com/Api.php?q=year&discipline=cardiology' + this.slug + '&search=' + this.search).subscribe(res => {
                this.information = res;
                this.spinner = false;
                this.contents = true;
            });
        }
    }
    openModal(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tmp = this.information[index].link.doi;
            let tmp1 = tmp.replace("target=http://", "target=");
            let tmp2 = tmp1.replace("target=http%3A%2F%2F", "target=");
            this.information[index].link.doi = tmp2.replace("fw.php", "fwApi.php");
            tmp = this.information[index].link.google;
            tmp1 = tmp.replace("target=http://", "target=");
            tmp2 = tmp1.replace("target=http%3A%2F%2F", "target=");
            this.information[index].link.google = tmp2.replace("fw.php", "fwApi.php");
            tmp = this.information[index].link.pdf;
            tmp1 = tmp.replace("target=http://", "target=");
            tmp2 = tmp1.replace("target=http%3A%2F%2F", "target=");
            this.information[index].link.pdf = tmp2.replace("fw.php", "fwApi.php");
            tmp = this.information[index].link.pub;
            tmp1 = tmp.replace("target=http://", "target=");
            tmp2 = tmp1.replace("target=http%3A%2F%2F", "target=");
            this.information[index].link.pub = tmp2.replace("fw.php", "fwApi.php");
            const modal = yield this.modalCtrl.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"],
                componentProps: {
                    contents: this.information[index]
                }
            });
            this.http.get('https://www.journalfilter.com/Api.php?hitrate=1&pmid=' + this.information[index].article_id).subscribe(res => {
                console.log(res);
            });
            modal.present();
        });
    }
};
SecondPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SecondPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second',
        template: __webpack_require__(/*! raw-loader!./second.page.html */ "./node_modules/raw-loader/index.js!./src/app/second/second.page.html"),
        styles: [__webpack_require__(/*! ./second.page.scss */ "./src/app/second/second.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], SecondPage);



/***/ })

}]);
//# sourceMappingURL=second-second-module-es2015.js.map