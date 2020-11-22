(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashouts-new-new-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/new/new.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/new/new.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomerwalletCashoutsNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n   <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Request CashOut</h3>\n  </ion-text>\n  <form [formGroup]=\"requestForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter the Amount</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter your Transaction PIN</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"password\" placeholder=\"PIN\" formControlName=\"pin\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row> \n       <ion-row>\n        <ion-col>\n          <ion-button  expand=\"block\" type=\"submit\" (click)=\"onSubmit()\" color=\"mytheme\"><strong class=\"white\">Submit</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n  </form> \n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/new/new.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/new/new.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellerswalletCashoutsNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header ion-padding color=\"mytheme\" class=\"mybg head\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-img src=\"assets/images/fyngram.png\" class=\"head-image\"></ion-img>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n   <ion-text>\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-margin-top ion-text-center\">Request CashOut</h3>\n  </ion-text>\n  <form [formGroup]=\"requestForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter the Amount</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"number\" placeholder=\"Amount\" formControlName=\"amount\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <ion-text class=\"small\">Enter your Transaction PIN</ion-text>\n          </ion-label>\n          <ion-input clearInput type=\"password\" placeholder=\"PIN\" formControlName=\"pin\"\n            class=\"input ion-padding-horizontal\"></ion-input>\n        </ion-col>\n      </ion-row> \n       <ion-row>\n        <ion-col>\n          <ion-button  expand=\"block\" type=\"submit\" (click)=\"onSubmit()\" color=\"mytheme\"><strong class=\"white\">Submit</strong>\n          </ion-button>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n  </form> \n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/new/new-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/customerwallet/cashouts/new/new-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppCustomerwalletCashoutsNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/customerwallet/cashouts/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/new/new.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/customerwallet/cashouts/new/new.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppCustomerwalletCashoutsNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/customerwallet/cashouts/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/customerwallet/cashouts/new/new.page.ts");

      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/new/new.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/customerwallet/cashouts/new/new.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomerwalletCashoutsNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJ3YWxsZXQvY2FzaG91dHMvbmV3L25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FBRVI7O0FBQ0E7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyd2FsbGV0L2Nhc2hvdXRzL25ldy9uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAgMDtcbn1cbi5oZWFkLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uc21hbGwge1xuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/customerwallet/cashouts/new/new.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/customerwallet/cashouts/new/new.page.ts ***!
      \*********************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppCustomerwalletCashoutsNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../home/service/shop.service */
      "./src/app/home/service/shop.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(authService, router, fun, loadingCtrl, shopService) {
          _classCallCheck(this, NewPage);

          this.authService = authService;
          this.router = router;
          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.shopService = shopService;
          this.requestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            }),
            pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sid = this.authService.currentUserDataValue.sid;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.authService.RequestCashOut(String(this.sid), String(this.requestForm.value.amount), String(this.requestForm.value.pin)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.router.navigate(['/', 'customerwallet', 'tabs', 'cashouts']);

                          _this.fun.presentToast(res.msg);
                        } else {
                          _this.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _home_service_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customerwallet/cashouts/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/customerwallet/cashouts/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/new/new-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/new/new-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppSellerswalletCashoutsNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellerswallet/cashouts/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/new/new.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/new/new.module.ts ***!
      \**********************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppSellerswalletCashoutsNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/sellerswallet/cashouts/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/sellerswallet/cashouts/new/new.page.ts");

      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/new/new.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/new/new.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellerswalletCashoutsNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0 0;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  margin-bottom: 2em;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyc3dhbGxldC9jYXNob3V0cy9uZXcvbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFFUjs7QUFDQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVyc3dhbGxldC9jYXNob3V0cy9uZXcvbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwIDA7XG59XG4uaGVhZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnNtYWxsIHtcbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG4uaW5wdXQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sellerswallet/cashouts/new/new.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/sellerswallet/cashouts/new/new.page.ts ***!
      \********************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppSellerswalletCashoutsNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(authService, router, fun, loadingCtrl) {
          _classCallCheck(this, NewPage);

          this.authService = authService;
          this.router = router;
          this.fun = fun;
          this.loadingCtrl = loadingCtrl;
          this.requestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sid = this.authService.currentUserDataValue.sid;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.sid = this.authService.currentUserDataValue.sid;
                      this.authService.RequestCashOut(String(this.sid), String(this.requestForm.value.amount), String(this.requestForm.value.pin)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this2.router.navigate(['/', 'sellerswallet', 'tabs', 'cashouts']);

                          _this2.fun.presentToast(res.msg);
                        } else {
                          _this2.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerswallet/cashouts/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/sellerswallet/cashouts/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cashouts-new-new-module-es5.js.map