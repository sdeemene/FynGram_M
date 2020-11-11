(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n  <div class=\"mid\" *ngIf=\"!show\">\n    <ion-grid>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"basket\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text class=\"ion-text-center\"><strong>You have not placed any order yet!</strong></ion-text>\n        <ion-button color=\"mytheme\" class=\"ion-margin-top\" (click)=\"onShop()\">\n          <span class=\"white\">Continue Shopping</span>\n        </ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <ion-item lines=\"none\" *ngFor=\"let order of orders\" class=\"card ion-margin-bottom ion-no-padding\"\n    (click)=\"open(order)\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\">Order Item(s) <strong>(#{{order.product_count}})</strong> </h5>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-text>\n            <h5 class=\"title ion-no-margin\"><strong>{{order.reference}}</strong></h5>\n          </ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub ion-no-margin\">{{order.StatusDetails?.name}}</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-float-right\" size=\"2\">\n        <ion-icon class=\"item-icon mycolor ion-float-right\" name=\"chevron-forward-circle\" mode=\"ios\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/admininventory/orders/orders-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/admininventory/orders/orders-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/admininventory/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() | details-details-module */ "default~details-details-module~orders-details-details-module").then(__webpack_require__.bind(null, /*! ./details/details.module */ "./src/app/admininventory/orders/details/details.module.ts")).then(m => m.DetailsPageModule)
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/admininventory/orders/orders.module.ts":
/*!********************************************************!*\
  !*** ./src/app/admininventory/orders/orders.module.ts ***!
  \********************************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/admininventory/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/admininventory/orders/orders.page.ts");







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/admininventory/orders/orders.page.scss":
/*!********************************************************!*\
  !*** ./src/app/admininventory/orders/orders.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pbnZlbnRvcnkvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFNBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmludmVudG9yeS9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zdWJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLml0ZW0taWNvbntcbiAgICBmb250LXNpemU6IDMycHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admininventory/orders/orders.page.ts":
/*!******************************************************!*\
  !*** ./src/app/admininventory/orders/orders.page.ts ***!
  \******************************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let OrdersPage = class OrdersPage {
    constructor(router, authService, loadingCtrl, orderService, fun) {
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.orderService = orderService;
        this.fun = fun;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetOrders(this.sid);
    }
    open(order) {
        // this.fun.setNavigationData(order.id, order);
        this.router.navigate(['/', 'admininventory', 'tabs', 'orders', 'details', order.id]);
    }
    GetOrders(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetOrders(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.orders = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onShop() {
        this.fun.navigate('home');
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admininventory/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/admininventory/orders/orders.page.scss")).default]
    })
], OrdersPage);



/***/ }),

/***/ "./src/app/customerorders/orders/orders-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerorders/orders/orders-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/customerorders/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/customerorders/orders/orders.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customerorders/orders/orders.module.ts ***!
  \********************************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/customerorders/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/customerorders/orders/orders.page.ts");







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/customerorders/orders/orders.page.scss":
/*!********************************************************!*\
  !*** ./src/app/customerorders/orders/orders.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJvcmRlcnMvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFNBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcm9yZGVycy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zdWJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLml0ZW0taWNvbntcbiAgICBmb250LXNpemU6IDMycHg7XG59XG4ubWlkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwdmg7XG4gICAgbGVmdDogNTAlO1xufVxuLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmZ1bGx7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc21hbGwge1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuLml0ZW0taWNvbnN7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/customerorders/orders/orders.page.ts":
/*!******************************************************!*\
  !*** ./src/app/customerorders/orders/orders.page.ts ***!
  \******************************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let OrdersPage = class OrdersPage {
    constructor(router, authService, loadingCtrl, orderService, fun) {
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.orderService = orderService;
        this.fun = fun;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetOrders(this.sid);
    }
    open(order) {
        this.router.navigate(['/', 'customerorders', 'tabs', 'orders', 'details', order.id]);
    }
    GetOrders(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetOrders(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.orders = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onShop() {
        this.fun.navigate('home');
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerorders/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/customerorders/orders/orders.page.scss")).default]
    })
], OrdersPage);



/***/ }),

/***/ "./src/app/sellersinventory/orders/orders-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/sellersinventory/orders/orders-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/sellersinventory/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/sellersinventory/orders/orders.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/sellersinventory/orders/orders.module.ts ***!
  \**********************************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/sellersinventory/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/sellersinventory/orders/orders.page.ts");







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/sellersinventory/orders/orders.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/sellersinventory/orders/orders.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 40vh;\n  left: 50%;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.full {\n  width: 100%;\n}\n\n.small {\n  margin: 0;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  float: right;\n  right: 0;\n}\n\n.item-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc2ludmVudG9yeS9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksU0FBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7QUFVSiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNpbnZlbnRvcnkvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uY2FyZCB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uc3Vie1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pdGVtLWljb257XG4gICAgZm9udC1zaXplOiAzMnB4O1xufVxuLm1pZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHZoO1xuICAgIGxlZnQ6IDUwJTtcbn1cbi5jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mdWxse1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsIHtcbiAgICBtYXJnaW46IDA7XG59XG4uYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcbn1cbi5pdGVtLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sellersinventory/orders/orders.page.ts":
/*!********************************************************!*\
  !*** ./src/app/sellersinventory/orders/orders.page.ts ***!
  \********************************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/functions.service */ "./src/app/services/functions.service.ts");
/* harmony import */ var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../authenticate/service/auth-service.service */ "./src/app/authenticate/service/auth-service.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let OrdersPage = class OrdersPage {
    constructor(router, authService, loadingCtrl, orderService, fun) {
        this.router = router;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.orderService = orderService;
        this.fun = fun;
        this.show = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.sid = this.authService.currentUserDataValue.sid;
        this.GetOrders(this.sid);
    }
    open(order) {
        // this.fun.setNavigationData(order.id, order);
        this.router.navigate(['/', 'sellersinventory', 'tabs', 'orders', 'details', order.id]);
    }
    GetOrders(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                mode: 'ios'
            });
            yield loading.present();
            this.orderService.GetOrders(sid)
                .subscribe(res => {
                loading.dismiss().catch(() => { });
                if (res.code === 200) {
                    this.orders = res.data;
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }, error => {
                loading.dismiss().catch(() => { });
            });
        });
    }
    onShop() {
        this.fun.navigate('home');
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersinventory/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/sellersinventory/orders/orders.page.scss")).default]
    })
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map