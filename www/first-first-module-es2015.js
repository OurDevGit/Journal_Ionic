(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-first-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/first/first.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/first/first.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    \n    <ion-title>\n      Selection\n    </ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\"  style = 'transform: scale(2); height: 100%;' *ngIf='false' >\n      <ion-spinner name='bubbles' style=\"margin: 0 auto;\" ></ion-spinner>\n  </ion-row>\n  <ion-list *ngFor = 'let item of information; let i = index;' class=\"accordion-list\" lines='none' detail=\"false\" no-padding>\n\n    <ion-item tappabel (click)=\"toggleSection(i)\"  class = 'listitem' [ngClass]=\"{'section-active':item.open, 'section': !item.open}\">\n      <ion-icon slot='start' name='arrow-forward' *ngIf='!item.open'></ion-icon>\n      <ion-icon slot='start' name='arrow-down' *ngIf='item.open'></ion-icon>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n    </ion-item>\n      <div *ngIf=' item.open'>\n        <ion-list *ngFor='let child of item.children;let j =index;' lines='none' class='child-list'>\n            <ion-item tappabel  (click)=\"pushpage(i,j)\" routerDirection='forward' [ngClass]=\"{'child-active':child.open, 'child': !child.open}\">\n              <ion-icon slot='start'  outline name='folder'  *ngIf='!child.open'></ion-icon>\n              <ion-label>\n                {{child.name}}\n              </ion-label>\n            </ion-item>\n          </ion-list>\n      </div>\n    \n  </ion-list>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/first/first-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/first/first-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FirstPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageRoutingModule", function() { return FirstPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first.page */ "./src/app/first/first.page.ts");




const routes = [
    {
        path: '',
        component: _first_page__WEBPACK_IMPORTED_MODULE_3__["FirstPage"]
    }
];
let FirstPageRoutingModule = class FirstPageRoutingModule {
};
FirstPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FirstPageRoutingModule);



/***/ }),

/***/ "./src/app/first/first.module.ts":
/*!***************************************!*\
  !*** ./src/app/first/first.module.ts ***!
  \***************************************/
/*! exports provided: FirstPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageModule", function() { return FirstPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-routing.module */ "./src/app/first/first-routing.module.ts");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first.page */ "./src/app/first/first.page.ts");







let FirstPageModule = class FirstPageModule {
};
FirstPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _first_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirstPageRoutingModule"]
        ],
        declarations: [_first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]]
    })
], FirstPageModule);



/***/ }),

/***/ "./src/app/first/first.page.scss":
/*!***************************************!*\
  !*** ./src/app/first/first.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:var(--ion-color-light);\n  --background: url('backpng.png') 0 0/100% 100% no-repeat;\n}\n\n.listitem {\n  border-left: 5px solid #3880ff;\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  margin-top: 2px;\n  --ion-item-background:#fff;\n}\n\n.accordion-list .section, .accordion-list .section-active {\n  --min-height:58px;\n}\n\n.section {\n  --ion-item-background:#fff;\n  --ion-item-color:#3880ff;\n}\n\n.section-active {\n  --ion-item-background:#7ba9f9;\n  --ion-item-color:#fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0px;\n  padding-left: 40px;\n  margin: 0px;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background:#ffffff;\n  --ion-item-color:#3880ff;\n}\n\n.child-active {\n  --ion-item-background:#fad86b;\n  --ion-item-color:#fff;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\n.product-list {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmF6eWJlYXIvRG93bmxvYWRzL215QXBwaW9zMi9qb3VybmFsL3NyYy9hcHAvZmlyc3QvZmlyc3QucGFnZS5zY3NzIiwic3JjL2FwcC9maXJzdC9maXJzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQ0FBQTtFQUNBLHdEQUFBO0FDQUo7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUNDSjs7QURDSTtFQUNJLGlCQUFBO0FDQ1I7O0FERUE7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7QUNHUjs7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURGSTtFQUNJLGtCQUFBO0FDSVI7O0FEREE7RUFDSSw2QkFBQTtFQUNBLHdCQUFBO0FDSUo7O0FERkE7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0FDS0o7O0FESkk7RUFDSSxXQUFBO0FDTVI7O0FESEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvZmlyc3QvZmlyc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1ncy9iYWNrcG5nLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4ubGlzdGl0ZW17XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMzg4MGZmO1xufVxuLmFjY29yZGlvbi1saXN0e1xuICAgIG1hcmdpbi1ib3R0b206NHB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmO1xuXG4gICAgLnNlY3Rpb24sLnNlY3Rpb24tYWN0aXZle1xuICAgICAgICAtLW1pbi1oZWlnaHQ6NThweDtcbiAgICB9XG59XG4uc2VjdGlvbntcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZjtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiMzODgwZmY7XG59XG4uc2VjdGlvbi1hY3RpdmV7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiM3YmE5Zjk7XG4gICAgLS1pb24taXRlbS1jb2xvcjojZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgfVxufVxuLmNoaWxkLWxpc3R7XG4gICAgcGFkZGluZzowcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgLmNoaWxkLC5jaGlsZC1hY3RpdmV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MnB4O1xuICAgIH1cbn1cbi5jaGlsZHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiMzODgwZmY7XG59XG4uY2hpbGQtYWN0aXZle1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmFkODZiO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6I2ZmZjtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICB9XG59XG4ucHJvZHVjdC1saXN0e1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7ICAgIFxufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZ3MvYmFja3BuZy5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4ubGlzdGl0ZW0ge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzODgwZmY7XG59XG5cbi5hY2NvcmRpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZjtcbn1cbi5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbiwgLmFjY29yZGlvbi1saXN0IC5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0tbWluLWhlaWdodDo1OHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmO1xuICAtLWlvbi1pdGVtLWNvbG9yOiMzODgwZmY7XG59XG5cbi5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojN2JhOWY5O1xuICAtLWlvbi1pdGVtLWNvbG9yOiNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VjdGlvbi1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2hpbGQtbGlzdCAuY2hpbGQsIC5jaGlsZC1saXN0IC5jaGlsZC1hY3RpdmUge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLWlvbi1pdGVtLWNvbG9yOiMzODgwZmY7XG59XG5cbi5jaGlsZC1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZhZDg2YjtcbiAgLS1pb24taXRlbS1jb2xvcjojZmZmO1xufVxuLmNoaWxkLWFjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/first/first.page.ts":
/*!*************************************!*\
  !*** ./src/app/first/first.page.ts ***!
  \*************************************/
/*! exports provided: FirstPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPage", function() { return FirstPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FirstPage = class FirstPage {
    constructor(http, navCtrl, route, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.automaticClose = false;
        this.spinner = true;
        this.route.queryParams.subscribe(params => {
            this.http.get('https://www.journalfilter.com/Api.php?discipline=cardiology&getmenu=topics').subscribe(res => {
                this.information = res['item'];
                this.spinner = false;
            });
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
FirstPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FirstPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first',
        template: __webpack_require__(/*! raw-loader!./first.page.html */ "./node_modules/raw-loader/index.js!./src/app/first/first.page.html"),
        styles: [__webpack_require__(/*! ./first.page.scss */ "./src/app/first/first.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], FirstPage);



/***/ })

}]);
//# sourceMappingURL=first-first-module-es2015.js.map