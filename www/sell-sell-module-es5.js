(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-sell-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sell/sell.page.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/sell/sell.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeSellSellPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Become A Seller</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"cart\" slot=\"icon-only\" (click)=\"onOpen('cart')\" class=\"white ion-margin\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-col class=\"ion-no-padding\">\n    <ion-row  class=\"head full ion-no-padding\">\n      <ion-col class=\"ion-padding\">\n        <ion-row>\n          <ion-text>\n            <h6 class=\"sub2 ion-no-margin ion-text-left\">Being a seller gives you the ability to list your products for all our customers to see .</h6>\n          </ion-text>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-text>\n            <h6  class=\"sub2 ion-no-margin ion-text-left\">Being a seller on fyngram, opens you up to different kind and types of buyers from far and near.</h6>\n          </ion-text>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row  class=\"head full mar-top ion-no-padding\">\n      <ion-col class=\"ion-padding\">\n        <ion-row>\n          <ion-text>\n            <h3 class=\"sub2 ion-no-margin ion-text-left\"><strong>How do I Become a Seller?</strong></h3>\n          </ion-text>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3 class=\"sub2 mar-top ion-no-margin ion-text-left\">TODO</h3>\n              </ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\"><strong>Register</strong></h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\">ACTION</h3>\n              </ion-text>\n            </ion-row>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\">Visit our website of www.fyngram.com and click on become a seller and register your business.</h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\"><strong>List</strong></h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\">List as many products as you have them in stock.</h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\"><strong>CashOut</strong></h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <ion-text>\n                <h3  class=\"sub2 mar-top ion-no-margin ion-text-left\">You can request for cashout, i.e request for your profit</h3>\n              </ion-text>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/sell/sell-routing.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/home/sell/sell-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: SellPageRoutingModule */

    /***/
    function srcAppHomeSellSellRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellPageRoutingModule", function () {
        return SellPageRoutingModule;
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


      var _sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sell.page */
      "./src/app/home/sell/sell.page.ts");

      var routes = [{
        path: '',
        component: _sell_page__WEBPACK_IMPORTED_MODULE_3__["SellPage"]
      }];

      var SellPageRoutingModule = function SellPageRoutingModule() {
        _classCallCheck(this, SellPageRoutingModule);
      };

      SellPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/sell/sell.module.ts":
    /*!******************************************!*\
      !*** ./src/app/home/sell/sell.module.ts ***!
      \******************************************/

    /*! exports provided: SellPageModule */

    /***/
    function srcAppHomeSellSellModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellPageModule", function () {
        return SellPageModule;
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


      var _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sell-routing.module */
      "./src/app/home/sell/sell-routing.module.ts");
      /* harmony import */


      var _sell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sell.page */
      "./src/app/home/sell/sell.page.ts");

      var SellPageModule = function SellPageModule() {
        _classCallCheck(this, SellPageModule);
      };

      SellPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellPageRoutingModule"]],
        declarations: [_sell_page__WEBPACK_IMPORTED_MODULE_6__["SellPage"]]
      })], SellPageModule);
      /***/
    },

    /***/
    "./src/app/home/sell/sell.page.scss":
    /*!******************************************!*\
      !*** ./src/app/home/sell/sell.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeSellSellPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n.text {\n  font-size: 12px;\n}\n.menu {\n  color: white !important;\n}\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n.my-btn2 {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #5a5a5a;\n  margin: 0 12px !important;\n}\n.btn-active2 {\n  background-color: rgba(210, 210, 210, 0.5);\n  color: black !important;\n  font-weight: bold;\n  border-radius: 3px;\n  --indicator-color-checked:none !important;\n}\n#dag {\n  scroll-behavior: smooth;\n}\n.hor-scroll {\n  height: 30px;\n}\n.card {\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  padding: 6px;\n  background-color: white;\n}\n.head {\n  padding: 2px;\n  background-color: white;\n}\n.full {\n  width: 100%;\n}\n.img {\n  background-size: contain;\n  width: 90px;\n  align-self: center;\n}\n.toptext {\n  font-size: 21px;\n  margin-bottom: 6px;\n}\n.sub {\n  color: #787878;\n  font-size: 12px;\n}\n.sub2 {\n  font-size: 13px;\n}\n.off {\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n.off-small {\n  font-size: 10px;\n  color: #787878;\n  margin-bottom: 5px;\n}\n.off-code {\n  background-color: rgba(210, 210, 210, 0.5);\n  border: 0.5px solid #b4b4b4;\n  margin-bottom: 5px;\n  padding: 3px;\n}\n.udanchuu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 3px;\n  border-radius: 10px;\n  height: 15px;\n}\n.mar-top {\n  margin-top: 3px;\n}\n.mycolor {\n  font-size: 15px;\n}\n.foot {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.off-codein {\n  font-size: 10px;\n  color: #787878;\n}\n.bottom {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZWxsL3NlbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0FBQ0o7QUFBSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQUE7RUFDSSx1QkFBQTtBQUdKO0FBREE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUlKO0FBRkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBS0o7QUFIQTtFQUNJLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFNSjtBQUpBO0VBQ0ksdUJBQUE7QUFPSjtBQUxBO0VBQ0ksWUFBQTtBQVFKO0FBTkE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQVVKO0FBUkE7RUFDSSxXQUFBO0FBV0o7QUFUQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWUo7QUFWQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQWFKO0FBWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWNKO0FBWkE7RUFDSSxlQUFBO0FBZUo7QUFiQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQWdCSjtBQWRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWlCSjtBQWZBO0VBQ0ksMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWtCSjtBQWhCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbUJKO0FBakJBO0VBQ0ksZUFBQTtBQW9CSjtBQWxCQTtFQUNJLGVBQUE7QUFxQko7QUFuQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBc0JKO0FBcEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUF1Qko7QUFyQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBd0JKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zZWxsL3NlbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tdGV4dHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubWVudSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubXktYnRue1xuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLm15LWJ0bjJ7XG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbn1cbi5idG4tYWN0aXZlMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTAsIC41KTtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG59XG4jZGFne1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLmhvci1zY3JvbGx7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFke1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbWcge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogOTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udG9wdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5zdWIge1xuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnN1YjIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5vZmYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub2ZmLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub2ZmLWNvZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMTAsIDIxMCwgLjUpO1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cbi51ZGFuY2h1dSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFyLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuLm15Y29sb3Ige1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5mb290IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm9mZi1jb2RlaW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xufVxuLmJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogM3B4O1xuICAgIHJpZ2h0OiAzcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/sell/sell.page.ts":
    /*!****************************************!*\
      !*** ./src/app/home/sell/sell.page.ts ***!
      \****************************************/

    /*! exports provided: SellPage */

    /***/
    function srcAppHomeSellSellPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellPage", function () {
        return SellPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/functions.service */
      "./src/app/services/functions.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellPage = /*#__PURE__*/function () {
        function SellPage(fun) {
          _classCallCheck(this, SellPage);

          this.fun = fun;
        }

        _createClass(SellPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onOpen",
          value: function onOpen(link) {
            this.fun.navigate(link);
          }
        }]);

        return SellPage;
      }();

      SellPage.ctorParameters = function () {
        return [{
          type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__["FunctionsService"]
        }];
      };

      SellPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sell',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sell.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/sell/sell.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sell.page.scss */
        "./src/app/home/sell/sell.page.scss"))["default"]]
      })], SellPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sell-sell-module-es5.js.map