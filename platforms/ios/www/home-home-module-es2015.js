(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>\n      Selection\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\"  style = 'transform: scale(2); height: 100%;' *ngIf='spinner' >\n      <ion-spinner name='bubbles' style=\"margin: 0 auto;\" ></ion-spinner>\n  </ion-row>\n  <ion-list *ngFor = 'let item of information; let i = index;' class=\"accordion-list\" lines='none' detail=\"false\" no-padding>\n\n    <ion-item tappabel (click)=\"toggleSection(i)\"  class = 'listitem' [ngClass]=\"{'section-active':item.open, 'section': !item.open}\">\n      <ion-icon slot='start' name='arrow-forward' *ngIf='!item.open'></ion-icon>\n      <ion-icon slot='start' name='arrow-down' *ngIf='item.open'></ion-icon>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n    </ion-item>\n      <div *ngIf=' item.open'>\n        <ion-list *ngFor='let child of item.children;let j =index;' lines='none' class='child-list'>\n            <ion-item tappabel  (click)=\"pushpage(i,j)\" routerDirection='forward' [ngClass]=\"{'child-active':child.open, 'child': !child.open}\">\n              <ion-icon slot='start'  outline name='folder'  *ngIf='!child.open'></ion-icon>\n              <ion-label>\n                {{child.name}}\n              </ion-label>\n            </ion-item>\n          </ion-list>\n      </div>\n    \n  </ion-list>\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button><ion-icon name = \"ios-apps\"></ion-icon></ion-fab-button>\n  \n    <ion-fab-list side=\"top\">\n      <ion-fab-button color='primary' [routerLink] = \"['/contact'] \" ><ion-icon name = \"ios-mail\"></ion-icon></ion-fab-button>\n      <ion-fab-button color='primary' [routerLink] = \"['/disclaimer'] \"><ion-icon name = \"ios-warning\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  \n    \n  \n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/shared-components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared-components.module.ts ***!
  \********************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedComponentsModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared-components.module */ "./src/app/components/shared-components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ]),
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-light);\n  --background: url('backpng.png') 0 0/100% 100% no-repeat;\n}\n\n.listitem {\n  border-left: 5px solid #3880ff;\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  margin-top: 2px;\n  --ion-item-background:#fff;\n}\n\n.accordion-list .section, .accordion-list .section-active {\n  --min-height:58px;\n}\n\n.section {\n  --ion-item-background:#fff;\n  --ion-item-color:#3880ff;\n}\n\n.section-active {\n  --ion-item-background:#7ba9f9;\n  --ion-item-color:#fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0px;\n  padding-left: 40px;\n  margin: 0px;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background:#ffffff;\n  --ion-item-color:#3880ff;\n}\n\n.child-active {\n  --ion-item-background:#fad86b;\n  --ion-item-color:#fff;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\n.product-list {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-footer {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmF6eWJlYXIvRG93bmxvYWRzL215QXBwaW9zMi9qb3VybmFsL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1DQUFBO0VBQ0Esd0RBQUE7QUNBRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFFQSwwQkFBQTtBQ0NGOztBRENFO0VBQ0ksaUJBQUE7QUNDTjs7QURFQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0ksV0FBQTtBQ0dOOztBREFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREZFO0VBQ0ksa0JBQUE7QUNJTjs7QUREQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUNLRjs7QURKRTtFQUNJLFdBQUE7QUNNTjs7QURIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrcG5nLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4ubGlzdGl0ZW17XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM4ODBmZjtcbn1cbi5hY2NvcmRpb24tbGlzdHtcbiAgbWFyZ2luLWJvdHRvbTo0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZjtcblxuICAuc2VjdGlvbiwuc2VjdGlvbi1hY3RpdmV7XG4gICAgICAtLW1pbi1oZWlnaHQ6NThweDtcbiAgfVxufVxuLnNlY3Rpb257XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmO1xuICAtLWlvbi1pdGVtLWNvbG9yOiMzODgwZmY7XG59XG4uc2VjdGlvbi1hY3RpdmV7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojN2JhOWY5O1xuICAtLWlvbi1pdGVtLWNvbG9yOiNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGlvbi1pY29ue1xuICAgICAgY29sb3I6I2ZmZjtcbiAgfVxufVxuLmNoaWxkLWxpc3R7XG4gIHBhZGRpbmc6MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbjowcHg7XG4gIC5jaGlsZCwuY2hpbGQtYWN0aXZle1xuICAgICAgbWFyZ2luLWJvdHRvbToycHg7XG4gIH1cbn1cbi5jaGlsZHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIC0taW9uLWl0ZW0tY29sb3I6IzM4ODBmZjtcbn1cbi5jaGlsZC1hY3RpdmV7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmFkODZiO1xuICAtLWlvbi1pdGVtLWNvbG9yOiNmZmY7XG4gIGlvbi1pY29ue1xuICAgICAgY29sb3I6I2ZmZjtcbiAgfVxufVxuLnByb2R1Y3QtbGlzdHtcbiAgcGFkZGluZzowcHg7XG4gIG1hcmdpbjowcHg7ICAgIFxufVxuaW9uLWZvb3RlcntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrcG5nLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5saXN0aXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM4ODBmZjtcbn1cblxuLmFjY29yZGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmO1xufVxuLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLCAuYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24tYWN0aXZlIHtcbiAgLS1taW4taGVpZ2h0OjU4cHg7XG59XG5cbi5zZWN0aW9uIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNmZmY7XG4gIC0taW9uLWl0ZW0tY29sb3I6IzM4ODBmZjtcbn1cblxuLnNlY3Rpb24tYWN0aXZlIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiM3YmE5Zjk7XG4gIC0taW9uLWl0ZW0tY29sb3I6I2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zZWN0aW9uLWFjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2hpbGQtbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5jaGlsZC1saXN0IC5jaGlsZCwgLmNoaWxkLWxpc3QgLmNoaWxkLWFjdGl2ZSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmNoaWxkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIC0taW9uLWl0ZW0tY29sb3I6IzM4ODBmZjtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmFkODZiO1xuICAtLWlvbi1pdGVtLWNvbG9yOiNmZmY7XG59XG4uY2hpbGQtYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomePage = class HomePage {
    constructor(http, navCtrl, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.router = router;
        this.automaticClose = false;
        this.spinner = true;
        this.http.get('https://www.journalfilter.com/Api.php?discipline=cardiology&getmenu=topics').subscribe(res => {
            this.information = res['item'];
            this.spinner = false;
        });
    }
    ngOnInit() {
    }
    pushpage(i, j) {
        this.url = this.information[i].children[j].url;
        let title = this.information[i].children[j].name;
        this.navCtrl.navigateForward(['/second/', this.url, title]);
    }
    toggleSection(index) {
        this.information[index].open = !this.information[index].open;
        if (this.automaticClose && this.information[index].open) {
            this.information
                .filter((item, itemIndex) => itemIndex != index)
                .map(item => item.open = false);
        }
    }
    toggleItem(index, childIndex) {
        this.information[index].children[childIndex].open;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomePage);

//


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map