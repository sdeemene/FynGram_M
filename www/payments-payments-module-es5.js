(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/payments/payments.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/payments/payments.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminaccountsPaymentsPaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/payments/payments.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/payments/payments.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomeraccountsPaymentsPaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title  color=\"light\">Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/payments/payments.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/payments/payments.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellersaccountsPaymentsPaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminaccounts/payments/payments-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/adminaccounts/payments/payments-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PaymentsPageRoutingModule */

    /***/
    function srcAppAdminaccountsPaymentsPaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function () {
        return PaymentsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/adminaccounts/payments/payments.page.ts");

      var routes = [{
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
      }];

      var PaymentsPageRoutingModule = function PaymentsPageRoutingModule() {
        _classCallCheck(this, PaymentsPageRoutingModule);
      };

      PaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/adminaccounts/payments/payments.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/adminaccounts/payments/payments.module.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentsPageModule */

    /***/
    function srcAppAdminaccountsPaymentsPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function () {
        return PaymentsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payments-routing.module */
      "./src/app/adminaccounts/payments/payments-routing.module.ts");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/adminaccounts/payments/payments.page.ts");

      var PaymentsPageModule = function PaymentsPageModule() {
        _classCallCheck(this, PaymentsPageModule);
      };

      PaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
      })], PaymentsPageModule);
      /***/
    },

    /***/
    "./src/app/adminaccounts/payments/payments.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/adminaccounts/payments/payments.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminaccountsPaymentsPaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluYWNjb3VudHMvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/adminaccounts/payments/payments.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/adminaccounts/payments/payments.page.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentsPage */

    /***/
    function srcAppAdminaccountsPaymentsPaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPage", function () {
        return PaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PaymentsPage = /*#__PURE__*/function () {
        function PaymentsPage() {
          _classCallCheck(this, PaymentsPage);
        }

        _createClass(PaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentsPage;
      }();

      PaymentsPage.ctorParameters = function () {
        return [];
      };

      PaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payments.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminaccounts/payments/payments.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payments.page.scss */
        "./src/app/adminaccounts/payments/payments.page.scss"))["default"]]
      })], PaymentsPage);
      /***/
    },

    /***/
    "./src/app/customeraccounts/payments/payments-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/customeraccounts/payments/payments-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: PaymentsPageRoutingModule */

    /***/
    function srcAppCustomeraccountsPaymentsPaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function () {
        return PaymentsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/customeraccounts/payments/payments.page.ts");

      var routes = [{
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
      }];

      var PaymentsPageRoutingModule = function PaymentsPageRoutingModule() {
        _classCallCheck(this, PaymentsPageRoutingModule);
      };

      PaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customeraccounts/payments/payments.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/customeraccounts/payments/payments.module.ts ***!
      \**************************************************************/

    /*! exports provided: PaymentsPageModule */

    /***/
    function srcAppCustomeraccountsPaymentsPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function () {
        return PaymentsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payments-routing.module */
      "./src/app/customeraccounts/payments/payments-routing.module.ts");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/customeraccounts/payments/payments.page.ts");

      var PaymentsPageModule = function PaymentsPageModule() {
        _classCallCheck(this, PaymentsPageModule);
      };

      PaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
      })], PaymentsPageModule);
      /***/
    },

    /***/
    "./src/app/customeraccounts/payments/payments.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/customeraccounts/payments/payments.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomeraccountsPaymentsPaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyYWNjb3VudHMvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/customeraccounts/payments/payments.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/customeraccounts/payments/payments.page.ts ***!
      \************************************************************/

    /*! exports provided: PaymentsPage */

    /***/
    function srcAppCustomeraccountsPaymentsPaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPage", function () {
        return PaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PaymentsPage = /*#__PURE__*/function () {
        function PaymentsPage() {
          _classCallCheck(this, PaymentsPage);
        }

        _createClass(PaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentsPage;
      }();

      PaymentsPage.ctorParameters = function () {
        return [];
      };

      PaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payments.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customeraccounts/payments/payments.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payments.page.scss */
        "./src/app/customeraccounts/payments/payments.page.scss"))["default"]]
      })], PaymentsPage);
      /***/
    },

    /***/
    "./src/app/sellersaccounts/payments/payments-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/sellersaccounts/payments/payments-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PaymentsPageRoutingModule */

    /***/
    function srcAppSellersaccountsPaymentsPaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function () {
        return PaymentsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/sellersaccounts/payments/payments.page.ts");

      var routes = [{
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
      }];

      var PaymentsPageRoutingModule = function PaymentsPageRoutingModule() {
        _classCallCheck(this, PaymentsPageRoutingModule);
      };

      PaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellersaccounts/payments/payments.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sellersaccounts/payments/payments.module.ts ***!
      \*************************************************************/

    /*! exports provided: PaymentsPageModule */

    /***/
    function srcAppSellersaccountsPaymentsPaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function () {
        return PaymentsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payments-routing.module */
      "./src/app/sellersaccounts/payments/payments-routing.module.ts");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payments.page */
      "./src/app/sellersaccounts/payments/payments.page.ts");

      var PaymentsPageModule = function PaymentsPageModule() {
        _classCallCheck(this, PaymentsPageModule);
      };

      PaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
      })], PaymentsPageModule);
      /***/
    },

    /***/
    "./src/app/sellersaccounts/payments/payments.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/sellersaccounts/payments/payments.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellersaccountsPaymentsPaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcnNhY2NvdW50cy9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/sellersaccounts/payments/payments.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/sellersaccounts/payments/payments.page.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentsPage */

    /***/
    function srcAppSellersaccountsPaymentsPaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPage", function () {
        return PaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PaymentsPage = /*#__PURE__*/function () {
        function PaymentsPage() {
          _classCallCheck(this, PaymentsPage);
        }

        _createClass(PaymentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PaymentsPage;
      }();

      PaymentsPage.ctorParameters = function () {
        return [];
      };

      PaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payments.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellersaccounts/payments/payments.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payments.page.scss */
        "./src/app/sellersaccounts/payments/payments.page.scss"))["default"]]
      })], PaymentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=payments-payments-module-es5.js.map