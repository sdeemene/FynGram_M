(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-new-new-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/new/new.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/new/new.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminusersShippingNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">New Shipping</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n  <form [formGroup]=\"shippingForm\">\n   \n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Name</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"name\" ></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Phone</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"phone\" ></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Email</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"email\" ></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Delivery Interval</span></ion-text>\n        <ion-row size=\"12\" class=\"ion-justify-content-center\">\n          <ion-textarea class=\"select input\" rows=\"4\" cols=\"20\" formControlName=\"interval\" maxlength=\"100\"\n            placeholder=\"Enter how long it would take to deliver.\">\n          </ion-textarea>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Fyngram Fees Percentage</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"fyngramfees\" ></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text><span class=\"label\">Seller Fees Percentage</span></ion-text>\n        <ion-input class=\"input ion-padding-horizontal\" type=\"text\" formControlName=\"sellerfees\" ></ion-input>\n      </ion-col>\n    </ion-row>\n\n  \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"mytheme\"  (click)=\"onSubmit()\"><span\n            class=\"white\"><strong>Save</strong></span></ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/new/new-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/adminusers/shipping/new/new-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppAdminusersShippingNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/adminusers/shipping/new/new.page.ts");

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
    "./src/app/adminusers/shipping/new/new.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/adminusers/shipping/new/new.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppAdminusersShippingNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/adminusers/shipping/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/adminusers/shipping/new/new.page.ts");

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
    "./src/app/adminusers/shipping/new/new.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/adminusers/shipping/new/new.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminusersShippingNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #d2d2d2;\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n\n.select {\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW51c2Vycy9zaGlwcGluZy9uZXcvbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBRUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW51c2Vycy9zaGlwcGluZy9uZXcvbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dCB7XG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuLnNlbGVjdCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICBcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/adminusers/shipping/new/new.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/adminusers/shipping/new/new.page.ts ***!
      \*****************************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppAdminusersShippingNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
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


      var _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../authenticate/service/auth-service.service */
      "./src/app/authenticate/service/auth-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NewPage = /*#__PURE__*/function () {
        function NewPage(fun, router, authService, loadingCtrl) {
          _classCallCheck(this, NewPage);

          this.fun = fun;
          this.router = router;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.shippingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            interval: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            fyngramfees: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            sellerfees: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              updateOn: 'blur',
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
                      if (this.shippingForm.valid) {
                        _context.next = 3;
                        break;
                      }

                      this.fun.presentToast('Wrong Input!');
                      return _context.abrupt("return", false);

                    case 3:
                      if (!(this.shippingForm.value.phone.length === 11)) {
                        _context.next = 16;
                        break;
                      }

                      if (!this.fun.validateEmail(this.shippingForm.value.email)) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 7;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        mode: 'ios'
                      });

                    case 7:
                      loading = _context.sent;
                      _context.next = 10;
                      return loading.present();

                    case 10:
                      this.authService.NewShippingAddress(String(0), String(this.shippingForm.value.name), this.shippingForm.value.interval, this.shippingForm.value.fyngramfees, this.shippingForm.value.sellerfees, 'add', String(this.shippingForm.value.phone), String(this.shippingForm.value.email)).subscribe(function (res) {
                        loading.dismiss()["catch"](function () {});

                        if (res.code === 200) {
                          _this.router.navigate(['/', 'adminusers', 'tabs', 'shippings']);

                          _this.fun.presentToast(res.msg);
                        }
                      }, function (error) {
                        loading.dismiss()["catch"](function () {});

                        _this.fun.presentToast(error);
                      });
                      _context.next = 14;
                      break;

                    case 13:
                      this.fun.presentToast('Invalid Email address!');

                    case 14:
                      _context.next = 17;
                      break;

                    case 16:
                      this.fun.presentToast('Phone number must be 11 digits!');

                    case 17:
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
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _authenticate_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminusers/shipping/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/adminusers/shipping/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shipping-new-new-module-es5.js.map